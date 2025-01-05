import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';
import {
  ApplicationConfig,
  isDevMode,
  provideAppInitializer,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { HttpProgressInterceptorService } from './interceptors/http-progress-interceptors.service';

function setDNSPreConnectLink() {
  const domain = environment.cdnBaseUrl;
  const preconnectLink = document.createElement('link');
  preconnectLink.rel = 'preconnect';
  preconnectLink.href = domain;
  preconnectLink.crossOrigin = 'anonymous';
  document.head.appendChild(preconnectLink);

  const dnsPrefetchLink = document.createElement('link');
  dnsPrefetchLink.rel = 'dns-prefetch';
  dnsPrefetchLink.href = domain;
  document.head.appendChild(dnsPrefetchLink);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withComponentInputBinding()),
    provideAnimationsAsync(),
    provideExperimentalZonelessChangeDetection(),

    provideAppInitializer(() => {
      setDNSPreConnectLink();
    }),

    //Firebase
    provideFirebaseApp(() => initializeApp({ ...environment.firebase })),
    provideAuth(() => getAuth(getApp())),
    provideFirestore(() => getFirestore()),

    //Transloco
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['en'],
        defaultLang: 'en',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),

    //Angular Material
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline',
        subscriptSizing: 'dynamic',
      },
    },

    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpProgressInterceptorService,
      multi: true,
    },

    //Taiga UI
    NG_EVENT_PLUGINS,
  ],
};
