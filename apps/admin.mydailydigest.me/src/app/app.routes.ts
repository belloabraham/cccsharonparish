import { Route, Router } from '@angular/router';
import { ROUTE } from '@cccsharonparish/mydailydigest';
import { AuthComponent } from './auth/auth.component';
import { filter, first, forkJoin, map, switchMap } from 'rxjs';
import { inject } from '@angular/core';
import { AUTH_TOKEN } from './services';
import { DashboardService } from './dashboard/dashboard.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { DashboardStore } from './dashboard/dashboard.store';
import { UserDataStore } from './shared';
import { EditorsStore } from './dashboard/editors/editors.store';

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
    providers: [DashboardService, EditorsStore],
    resolve: {
      data: () => {
        const dataStore = inject(UserDataStore);
        const languages$ = inject(DashboardStore).getSupportedLanguages();
        return inject(AUTH_TOKEN)
          .getAuthSate$()
          .pipe(
            filter((user) => user !== null),
            first(),
            switchMap((user) => {
              return forkJoin([
                dataStore.getUser(user.uid),
                languages$,
              ]);
            })
          );
      },
    },
    canMatch: [
      (router: Router) => {
        const user = toSignal(inject(AUTH_TOKEN).getAuthSate$())();
        if (user === null) {
          return router.createUrlTree([ROUTE.ROOT]);
        }
        if (user?.displayName === null) {
          return router.createUrlTree([ROUTE.SIGN_UP]);
        }
        return true;
      },
    ],
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then(
        (mod) => mod.DASHBOARD_ROUTES
      ),
  },
  {
    path: ROUTE.VERIFY_EMAIL,
    canMatch: [
      (router: Router) => {
        const user = toSignal(inject(AUTH_TOKEN).getAuthSate$())();
        return user?.emailVerified === true
          ? router.createUrlTree([ROUTE.ROOT])
          : true;
      },
    ],
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
