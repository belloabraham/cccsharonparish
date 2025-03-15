import { Injectable } from '@angular/core';
import { ReplaySubject, of } from 'rxjs';

@Injectable()
export class MockLanguageResourceService {
  private readonly NUMBER_OF_CACHED_DATA = 1;
  private isLangLoadSuccessfully$ = new ReplaySubject<boolean>(
    this.NUMBER_OF_CACHED_DATA
  );

  setLanguageResourceLoadedSuccessfully(loaded: boolean) {
    this.isLangLoadSuccessfully$.next(loaded);
  }

  getLanguageLoadSuccessfully$() {
    return this.isLangLoadSuccessfully$;
  }

  loadLanguageResource(language: string) {
    return of(`Loaded ${language}`); // Mocked response
  }

  getStringWithParameter(key: string, params: { key: string } | object) {
    return `${key} (${JSON.stringify(params)})`; // Mocked translation
  }

  getString(key: string): string {
    return `Translated(${key})`; // Mocked translation
  }
}
