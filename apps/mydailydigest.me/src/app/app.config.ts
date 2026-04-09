import {
  afterNextRender,
  ApplicationConfig,
  provideAppInitializer,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { setDNSPreConnectLink } from '@cccsharonparish/mydailydigest';
import { environment } from '../environments/environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { provideImgixLoader } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideRouter(appRoutes, withComponentInputBinding()),
    provideAnimationsAsync(),
    provideExperimentalZonelessChangeDetection(),

    provideAppInitializer(() => {
      afterNextRender(() => {
        setDNSPreConnectLink(environment.cdnBaseUrl);
      });
    }),

    //NgOptimize
    // provideImgixLoader(environment.cdnBaseUrl),
  ],
};
