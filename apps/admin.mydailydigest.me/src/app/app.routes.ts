import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '**',
    loadComponent: () =>
      import('./404/not-found.component').then((mod) => mod.NotFoundComponent),
  },
];
