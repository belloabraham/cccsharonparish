import { Routes } from '@angular/router';
import { ROUTE } from '@cccsharonparish/mydailydigest';
import { PublishedContentComponent } from './published-content.component';
import { PUBLISHED_CONTENT_STRING_RESOURCE_KEY } from './i18n/string-res-keys';

const KEY = PUBLISHED_CONTENT_STRING_RESOURCE_KEY;

export const PUBLISHED_CONTENT_ROUTES: Routes = [
  {
    path: ROUTE.ROOT,
    component: PublishedContentComponent,
    children: [
      {
        path: ROUTE.ROOT,
        pathMatch: 'full',
        redirectTo: ROUTE.YEAR,
      },
      {
        path: ROUTE.YEAR,
        data: {
          breadcrumb: KEY.YEAR,
        },
        loadComponent: () =>
          import('./content-option/content-option.component').then(
            (mod) => mod.ContentOptionComponent
          ),
      },
      {
        path: ROUTE.LIST,
        loadComponent: () =>
          import('./content-list/content-list.component').then(
            (mod) => mod.ContentListComponent
          ),
      },
    ],
  },
];
