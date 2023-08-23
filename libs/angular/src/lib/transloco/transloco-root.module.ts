import { provideTransloco, TranslocoModule } from '@ngneat/transloco';
import { isDevMode, NgModule } from '@angular/core';
import { TranslocoLoaderService } from './transloco-loader.service';

@NgModule({
  exports: [TranslocoModule],
  providers: [
    provideTransloco({
      config: {
        availableLangs: ['en', 'fr'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: isDevMode()
      },
      loader: TranslocoLoaderService,
    }),
  ],
})
export class TranslocoRootModule {}
