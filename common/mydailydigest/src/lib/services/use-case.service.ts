import { inject, Injectable } from '@angular/core';
import { LanguageResourceService } from '@cccsharonparish/angular';
import { GLOBAL_STRING_RESOURCE_KEY } from '../data/i18n/global-string-res-keys';

@Injectable({
  providedIn: 'root',
})
export class UseCaseService {
  private languageService = inject(LanguageResourceService);

  getPageTitle(
    pageTitleKey: string,
    appNameKey: string = GLOBAL_STRING_RESOURCE_KEY.APP_NAME
  ) {
    const appName = this.languageService.getString(appNameKey);
    const pageTitle = this.languageService.getStringWithParameter(
      pageTitleKey,
      {
        value: appName,
      }
    );
    return pageTitle;
  }
}
