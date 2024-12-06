import { Component, effect, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { ROUTE } from '../data';
import { MatButtonModule } from '@angular/material/button';
import { LanguageResourceService } from '@cccsharonparish/angular';
import { Title } from '@angular/platform-browser';
import { AppStore } from '../app.store';

@Component({
  selector: 'sdd-not-found',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage, TranslocoModule, MatButtonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  KEY = STRING_RESOURCE_KEY;
  ROOT = ROUTE.ROOT;

  private readonly appStore = inject(AppStore);
  private readonly languageResourceService = inject(LanguageResourceService);
  private readonly title = inject(Title);

  constructor() {
    effect(() => {
      if (this.appStore.language().loaded) {
        const pageTitle = this.languageResourceService.getString(
          STRING_RESOURCE_KEY.PAGE_TITLE
        );
        this.title.setTitle(pageTitle);
      }
    });
  }
}
