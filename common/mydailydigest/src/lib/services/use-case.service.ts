import { inject, Injectable } from '@angular/core';
import { LanguageResourceService } from '@cccsharonparish/angular';
import { environment } from '../environments';

@Injectable({
  providedIn: 'root',
})
export class UseCaseService {
  private languageService = inject(LanguageResourceService);

  getPageTitle(
    pageTitleKey: string,
  ) {
    const pageTitle = this.languageService.getStringWithParameter(
      pageTitleKey,
      {
        value: environment.appName,
      }
    );
    return pageTitle;
  }
}
