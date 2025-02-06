import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ROUTE } from '@cccsharonparish/mydailydigest';
import { DASHBOARD_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { inject } from '@angular/core';
import { PublishedContentStore } from './published-content/published-content-store';
import { ContentStore } from './shared';

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
        providers:[PublishedContentStore],
        data: {
          breadcrumb: KEY.PUBLISHED,
        },
        loadChildren: () =>
          import('./published-content/published.routes').then(
            (mod) => mod.PUBLISHED_CONTENT_ROUTES
          ),
      },
      {
        path: ROUTE.AWAITING_APPROVAL,
        data: {
          breadcrumb: KEY.AWAITING_APPROVAL,
        },
        loadComponent: () =>
          import('./awaiting-approval/awaiting-approval.component').then(
            (mod) => mod.AwaitingApprovalComponent
          ),
      },
      {
        path: `${ROUTE.NEW}/:${ROUTE.PARAMS.LANGUAGE_CODE}`,
        resolve: {
          data: () =>  inject(ContentStore).getDraftContents(),
        },
        data: {
          breadcrumb: KEY.DRAFT,
        },
        loadComponent: () =>
          import('./new-content/new-content.component').then(
            (mod) => mod.NewContentComponent
          ),
      },
      {
        path: `${ROUTE.TRANSLATE}/:${ROUTE.PARAMS.LANGUAGE_CODE}`,
        resolve: {
          data: () => inject(ContentStore).getApprovedContents(),
        },
        data: {
          breadcrumb: KEY.TRANSLATE,
        },
        loadComponent: () =>
          import('./translate/translate.component').then(
            (mod) => mod.TranslateComponent
          ),
      },
      {
        path: ROUTE.APPROVED,
        resolve: {
          data: () => inject(ContentStore).getApprovedContents(),
        },
        data: {
          breadcrumb: KEY.APPROVED,
        },
        loadComponent: () =>
          import('./approved/approved.component').then(
            (mod) => mod.ApprovedComponent
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
        data: {
          breadcrumb: KEY.PROFILE,
        },
        loadComponent: () =>
          import('./profile/profile.component').then(
            (mod) => mod.ProfileComponent
          ),
      },
    ],
  },
];
