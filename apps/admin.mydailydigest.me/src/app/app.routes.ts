import { Route, Router } from '@angular/router';
import { ROUTE } from '@cccsharonparish/mydailydigest';
import { AuthComponent } from './auth/auth.component';
import { map } from 'rxjs';
import { inject } from '@angular/core';
import {
  AUTH_TOKEN,
  CLOUD_STORAGE_TOKEN,
  CloudStorageService,
  FirestoreService,
} from './services';
import { DashboardService } from './dashboard/dashboard.service';
import { REMOTE_DATA_TOKEN } from './services/data/remote/remote-data.token';
import { toSignal } from '@angular/core/rxjs-interop';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getApp } from '@angular/fire/app';
import { provideImgixLoader } from '@angular/common';
import { environment } from '../environments/environment';

export const appRoutes: Route[] = [
  {
    path: ROUTE.ROOT,
    pathMatch: 'full',
    canMatch: [
      //Match route if authenticated user does not exist
      () => false,
      // inject(AUTH_TOKEN)
      //   .getAuthSate$()
      //   .pipe(
      //     map((userIsAuthenticated) => (userIsAuthenticated ? false : true))
      //   ),
    ],
    component: AuthComponent,
  },
  {
    path: ROUTE.ROOT,
    providers: [
      {
        provide: CLOUD_STORAGE_TOKEN,
        useClass: CloudStorageService,
      },
      {
        provide: REMOTE_DATA_TOKEN,
        useFactory: () => new FirestoreService(),
      },
      provideStorage(() => getStorage(getApp())),
      provideImgixLoader(environment.cdnBaseUrl),
      DashboardService,
    ],
    // canMatch: [
    //   (router: Router) => {
    //     const user = toSignal(inject(AUTH_TOKEN).getAuthSate$())();
    //     if (user === null) {
    //       return router.createUrlTree([ROUTE.ROOT]);
    //     }
    //     if (user?.displayName === null) {
    //       return router.createUrlTree([ROUTE.SIGN_UP]);
    //     }
    //     return true;
    //   },
    // ],
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then(
        (mod) => mod.DASHBOARD_ROUTES
      ),
  },
  {
    path: ROUTE.VERIFY_EMAIL,
    // canMatch: [
    //   (router: Router) => {
    //     const user = toSignal(inject(AUTH_TOKEN).getAuthSate$())();
    //     return user?.emailVerified === true
    //       ? router.createUrlTree([ROUTE.ROOT])
    //       : true;
    //   },
    // ],
    loadComponent: () =>
      import('./verify-email/verify-email.component').then(
        (mod) => mod.VerifyEmailComponent
      ),
  },
  {
    path: ROUTE.SIGN_UP,
    canMatch: [
      (router: Router) => {
        const user = toSignal(inject(AUTH_TOKEN).getAuthSate$())();
        if (user === null || user?.displayName === null) {
          return router.createUrlTree([ROUTE.ROOT]);
        }
        return true;
      },
    ],
    loadComponent: () =>
      import('./sign-up/sign-up.component').then((mod) => mod.SignUpComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./404/not-found.component').then((mod) => mod.NotFoundComponent),
  },
];
