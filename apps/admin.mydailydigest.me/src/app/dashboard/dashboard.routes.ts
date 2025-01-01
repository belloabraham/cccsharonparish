import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ROUTE } from '@cccsharonparish/mydailydigest';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: ROUTE.ROOT,
    component: DashboardComponent,
    children: [
      {
        path: ROUTE.ROOT,
        pathMatch: 'full',
        redirectTo: ROUTE.PUBLISHED,
      },
      {
        path: ROUTE.PUBLISHED,
        loadComponent: () =>
          import('./published-content/published-content.component').then(
            (mod) => mod.PublishedContentComponent
          ),
      },
      {
        path: ROUTE.DRAFT,
        loadComponent: () =>
          import('./draft/draft.component').then((mod) => mod.DraftComponent),
      },
      {
        path: `${ROUTE.NEW}/:${ROUTE.PARAMS.LANGUAGE_CODE}`,
        loadComponent: () =>
          import('./new-content/new-content.component').then(
            (mod) => mod.NewContentComponent
          ),
      },
      {
        path: ROUTE.EDITORS,
        loadComponent: () =>
          import('./editors/editors.component').then(
            (mod) => mod.EditorsComponent
          ),
      },
      {
        path: ROUTE.SETTINGS,
        loadComponent: () =>
          import('./settings/settings.component').then(
            (mod) => mod.SettingsComponent
          ),
      },
    ],
  },
];
