import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ROUTE } from '@cccsharonparish/mydailydigest';
import { DASHBOARD_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { ProfileService } from './profile/profile.service';

const KEY = DASHBOARD_STRING_RESOURCE_KEY;

export const DASHBOARD_ROUTES: Routes = [
  {
    path: ROUTE.ROOT,
    component: DashboardComponent,
    data: {
      breadcrumb: KEY.DASHBOARD,
    },
    children: [
      {
        path: ROUTE.ROOT,
        pathMatch: 'full',
        redirectTo: ROUTE.PUBLISHED,
      },
      {
        path: ROUTE.PUBLISHED,
        data: {
          breadcrumb: KEY.PUBLISHED,
        },
        loadComponent: () =>
          import('./published-content/published-content.component').then(
            (mod) => mod.PublishedContentComponent
          ),
      },
      {
        path: ROUTE.DRAFT,
        data: {
          breadcrumb: KEY.DRAFT,
        },
        loadComponent: () =>
          import('./draft/draft.component').then((mod) => mod.DraftComponent),
      },
      {
        path: `${ROUTE.NEW}/:${ROUTE.PARAMS.LANGUAGE_CODE}`,
        data: {
          breadcrumb: KEY.DAILY_DIGEST,
        },
        loadComponent: () =>
          import('./new-content/new-content.component').then(
            (mod) => mod.NewContentComponent
          ),
      },
      {
        path: ROUTE.EDITORS,
        data: {
          breadcrumb: KEY.EDITORS,
        },
        loadComponent: () =>
          import('./editors/editors.component').then(
            (mod) => mod.EditorsComponent
          ),
      },
      {
        path: ROUTE.PROFILE,
        providers: [ProfileService],
        data: {
          breadcrumb: KEY.PROFILE,
        },
        loadComponent: () =>
          import('./profile/profile.component').then(
            (mod) => mod.ProfileComponent
          ),
      },
      {
        path: ROUTE.SETTINGS,
        data: {
          breadcrumb: KEY.SETTINGS,
        },
        loadComponent: () =>
          import('./settings/settings.component').then(
            (mod) => mod.SettingsComponent
          ),
      },
    ],
  },
];
