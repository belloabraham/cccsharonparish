import { Component, effect, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppStore } from 'common/mydailydigest/src/lib/app.store';
import { PAGE_TITLE_KEY } from '../injection.token';
import { environment } from '../../../environments/environment';
import { LanguageResourceService } from '@cccsharonparish/angular';
import { HttpRequestProgressIndicatorService } from '../../services';

@Component({
  template: ``,
})
export class CommonComponent {
  private readonly title = inject(Title);
  readonly languageService = inject(LanguageResourceService);
  readonly appStore = inject(AppStore);
  private readonly pageTitleKey = inject(PAGE_TITLE_KEY);
  readonly httpRequestProgressIndicatorService = inject(
    HttpRequestProgressIndicatorService
  );

  constructor() {
    effect(() => {
      if (this.appStore.language().loaded) {
        this.setPageTitle(this.pageTitleKey);
      }
    });
  }

  private setPageTitle(pageTitleKey: string) {
    const pageTitle = this.getPageTitle(pageTitleKey);
    this.title.setTitle(pageTitle);
  }

  private getPageTitle(pageTitleKey: string) {
    const pageTitle = this.languageService.getStringWithParameter(
      pageTitleKey,
      {
        value: environment.appName,
      }
    );
    return pageTitle;
  }
}
