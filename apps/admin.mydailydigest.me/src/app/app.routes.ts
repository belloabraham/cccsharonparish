import { Route, Router } from '@angular/router';
import { ROUTE } from '@cccsharonparish/mydailydigest';
import { AuthComponent } from './auth/auth.component';
import { map } from 'rxjs';
import { inject } from '@angular/core';
import {
  AUTH_TOKEN,
  CLOUD_STORAGE_TOKEN,
  CloudStorageService,
} from './services';
import { DashboardService } from './dashboard/dashboard.service';

export const appRoutes: Route[] = [
  {
    path: ROUTE.ROOT,
    pathMatch: 'full',
    canMatch: [
      //Match route if authenticated user does not exist
      () =>
        inject(AUTH_TOKEN)
          .getAuthSate$()
          .pipe(
            map((userIsAuthenticated) => (userIsAuthenticated ? false : true))
          ),
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
      DashboardService,
    ],
    canMatch: [
      //Match route only if authenticated user exist
      () =>
        inject(AUTH_TOKEN)
          .getAuthSate$()
          .pipe(
            map((userIsAuthenticated) => (userIsAuthenticated ? true : false))
          ),
    ],
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then(
        (mod) => mod.DASHBOARD_ROUTES
      ),
  },
  {
    path: ROUTE.VERIFY_EMAIL,
    canMatch: [
      (router: Router) =>
        inject(AUTH_TOKEN)
          .getAuthSate$()
          .pipe(
            map((userIsAuthenticated) =>
              userIsAuthenticated ? router.createUrlTree([ROUTE.ROOT]) : true
            )
          ),
    ],
    loadComponent: () =>
      import('./verify-email/verify-email.component').then(
        (mod) => mod.VerifyEmailComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./404/not-found.component').then((mod) => mod.NotFoundComponent),
  },
];
