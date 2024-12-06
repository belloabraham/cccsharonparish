import { inject, Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageResourceService {
  private readonly NUMBER_OF_CACHED_DATA = 1;
  private isLangLoadSuccessfully$ = new ReplaySubject<boolean>(
    this.NUMBER_OF_CACHED_DATA
  );
  private translocoService = inject(TranslocoService);

  setLanguageResourceLoadedSuccessfully(loaded: boolean) {
    this.isLangLoadSuccessfully$.next(loaded);
  }

  getLanguageLoadSuccessfully$() {
    return this.isLangLoadSuccessfully$;
  }

  loadLanguageResource(language: string) {
    return this.translocoService.load(language);
  }

  getStringWithParameter(key: string, params: { key: string } | object) {
    return this.translocoService.translate(key, params);
  }

  getString(key: string): string {
    return this.translocoService.translate(key);
  }
}
