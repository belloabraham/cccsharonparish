import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { ISpiritualDailyDigest } from '@cccsharonparish/mydailydigest';
import { retryWhen, tap } from 'rxjs';
import { firestoreRetryStrategy } from '../../services';
import { PublishedContentService } from './published-content.service';

type PublishedContentState = {
  publishedContentYears: ISpiritualDailyDigest[];
  publishedContentByYear: ISpiritualDailyDigest[];
};

const initialState: PublishedContentState = {
  publishedContentYears: [],
  publishedContentByYear: [],
};

export const PublishedContentStore = signalStore(
  withState(initialState),
  withMethods(
    (store, publishedContentService = inject(PublishedContentService)) => ({
      getDraftContentForTheYear() {
        // return contentService.getDraftContents().pipe(
        //   retryWhen(firestoreRetryStrategy(Infinity)),
        //   tap({
        //     next: (data) => {
        //       patchState(store, (state) => ({
        //         ...state,
        //         draftContentForTheYear: data,
        //       }));
        //     },
        //   })
        // );
      },
    })
  )
);
