import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocaleServiceService {

  private readonly NUMBER_OF_CACHED_DATA = 1
  private isLangLoadSuccessfully = new ReplaySubject<boolean>(
    this.NUMBER_OF_CACHED_DATA
  );

  constructor(private translocoService: TranslocoService) {}

  setIsLangLoadSuccessfully(value: boolean) {
    this.isLangLoadSuccessfully.next(value);
  }

  getIsLangLoadSuccessfullyObs() {
    return this.isLangLoadSuccessfully;
  }

  loadLanguage(lang: string) {
    return this.translocoService.load(lang);
  }

  scopeTranslate(
    key: string,
    scope: string,
    params: { value: string } | object
  ): string {
    return this.translocoService.translate(key, params, scope);
  }

  lazyScopeTranslate(
    key: string,
    scope: string,
    params: { value: string } | object
  ) {
    return this.translocoService.selectTranslate(key, params, scope);
  }

  paramTranslate(key: string, params: { value: string } | object): string {
    return this.translocoService.translate(key, params);
  }

  translate(key: string): string {
    return this.translocoService.translate(key);
  }
}
