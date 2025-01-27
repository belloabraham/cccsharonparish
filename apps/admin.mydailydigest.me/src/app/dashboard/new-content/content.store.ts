import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';
import {
  ISpiritualDailyDigest,
} from '@cccsharonparish/mydailydigest';
import { ContentService } from './content.service';
import { retryWhen, tap } from 'rxjs';
import { firestoreRetryStrategy } from '../../services';

type ContentState = {
  draftContentForTheYear: ISpiritualDailyDigest[];
  approvedContent: ISpiritualDailyDigest[];
  contentAwaitingApproval: ISpiritualDailyDigest[];
};

const initialState: ContentState = {
  draftContentForTheYear: [],
  approvedContent: [],
  contentAwaitingApproval: [],
};

export const ContentStore = signalStore(
  withState(initialState),
  withMethods((store, contentService = inject(ContentService)) => ({
    getDraftContentForTheYear() {
      patchState(store, (state) => ({
        ...state,
        draftContentForTheYear: [],
      }));
      return contentService.getDraftContents().pipe(
        retryWhen(firestoreRetryStrategy(Infinity)),
        tap({
          next: (data) => {
            patchState(store, (state) => ({
              ...state,
              draftContentForTheYear: data,
            }));
          },
        })
      );
    },
    getContentsAwaitingApproval() {
      patchState(store, (state) => ({
        ...state,
        contentAwaitingApproval: [],
      }));
      return contentService.getContentsAwaitingApproval().pipe(
        retryWhen(firestoreRetryStrategy(Infinity)),
        tap({
          next: (data) => {
            patchState(store, (state) => ({
              ...state,
              contentAwaitingApproval: data,
            }));
          },
        })
      );
    },
    getApprovedContents() {
      patchState(store, (state) => ({
        ...state,
        approvedContent: [],
      }));
      return contentService.getApprovedContents().pipe(
        retryWhen(firestoreRetryStrategy(Infinity)),
        tap({
          next: (data) => {
            patchState(store, (state) => ({
              ...state,
              approvedContent: data,
            }));
          },
        })
      );
    },
  }))
);
