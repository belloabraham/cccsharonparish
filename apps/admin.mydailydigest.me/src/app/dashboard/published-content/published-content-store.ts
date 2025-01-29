import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';
import {
  IPublishedContentYear,
  ISpiritualDailyDigest,
} from '@cccsharonparish/mydailydigest';
import { retryWhen, tap } from 'rxjs';
import { firestoreRetryStrategy } from '../../services';
import { PublishedContentService } from './published-content.service';

type PublishedContentState = {
  publishedContentYears: IPublishedContentYear[];
  publishedContentsByAYear: ISpiritualDailyDigest[];
  selectedYear: number;
};

const initialState: PublishedContentState = {
  publishedContentYears: [],
  publishedContentsByAYear: [],
  selectedYear: 0,
};

export const PublishedContentStore = signalStore(
  withState(initialState),
  withMethods(
    (store, publishedContentService = inject(PublishedContentService)) => ({
      getPublishedContentYears() {
        return publishedContentService.getPublishedContentYears().pipe(
          retryWhen(firestoreRetryStrategy(Infinity)),
          tap({
            next: (data) => {
              patchState(store, (state) => ({
                ...state,
                publishedContentYears: data,
              }));
            },
          })
        );
      },
      getPublishedContentsByAYear(year: number) {
        return publishedContentService.getPublishedContentsByAYear(year).pipe(
          retryWhen(firestoreRetryStrategy(Infinity)),
          tap({
            next: (data) => {
              patchState(store, (state) => ({
                ...state,
                publishedContentsByAYear: data,
              }));
            },
          })
        );
      },
      updateSelectedYear(selectedYear: number) {
        patchState(store, (state) => ({
          ...state,
          selectedYear: selectedYear,
        }));
      },
    })
  )
);
