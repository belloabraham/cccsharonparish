import { Route } from '@angular/router';
import { ROUTE } from '@cccsharonparish/mydailydigest';

export const appRoutes: Route[] = [
  {
    path: ROUTE.ROOT,
    pathMatch: 'full',
    loadComponent: () =>
      import('./home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: ROUTE.DOWNLOAD,
    canMatch: [() => {}],
    loadComponent: () =>
      import('./download/download.component').then(
        (mod) => mod.DownloadComponent
      ),
  },
  {
    path: `${ROUTE.LINK}/:${ROUTE.PARAMS.CONTENT_ID}`,
    canMatch: [() => {}],
    loadComponent: () =>
      import('./download/download.component').then(
        (mod) => mod.DownloadComponent
      ),
  },
  {
    path: ROUTE.PRIVACY,
    loadComponent: () =>
      import('./privacy/privacy.component').then((mod) => mod.PrivacyComponent),
  },
  {
    path: ROUTE.TERMS,
    loadComponent: () =>
      import('./terms/terms.component').then((mod) => mod.TermsComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./404/not-found.component').then((mod) => mod.NotFoundComponent),
  },
];
