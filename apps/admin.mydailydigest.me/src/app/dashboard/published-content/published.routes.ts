import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { ROUTE } from '@cccsharonparish/mydailydigest';
import { PublishedContentComponent } from './published-content.component';
import { PUBLISHED_CONTENT_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { inject } from '@angular/core';
import { PublishedContentStore } from './published-content-store';

const KEY = PUBLISHED_CONTENT_STRING_RESOURCE_KEY;

export const PUBLISHED_CONTENT_ROUTES: Routes = [
  {
    path: ROUTE.ROOT,
    component: PublishedContentComponent,
    children: [
      {
        path: ROUTE.ROOT,
        pathMatch: 'full',
        redirectTo: ROUTE.YEARS,
      },
      {
        path: ROUTE.YEARS,
        resolve: {
          data: () => inject(PublishedContentStore).getPublishedContentYears(),
        },
        data: {
          breadcrumb: KEY.YEARS,
        },
        loadComponent: () =>
          import('./content-option/content-option.component').then(
            (mod) => mod.ContentOptionComponent
          ),
      },
      {
        path: `${ROUTE.LIST}/:${ROUTE.PARAMS.CONTENT_YEAR}`,
        data: {
          breadcrumb: KEY.YEAR,
        },
        // resolve: {
        //   data: () => {
        //     const selectedYear = inject(ActivatedRouteSnapshot).paramMap.get(
        //       ROUTE.PARAMS.CONTENT_YEAR
        //     )!;
        //     return inject(PublishedContentStore).getPublishedContentsByAYear(
        //       Number(selectedYear)
        //     );
        //   },
        // },
        loadComponent: () =>
          import('./content-list/content-list.component').then(
            (mod) => mod.ContentListComponent
          ),
      },
    ],
  },
];
