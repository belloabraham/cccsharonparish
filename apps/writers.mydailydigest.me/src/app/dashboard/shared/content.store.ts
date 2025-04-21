import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { ISpiritualDailyDigest } from '@cccsharonparish/mydailydigest';
import { ContentService } from './content.service';
import { retryWhen, tap } from 'rxjs';
import { firestoreRetryStrategy } from '../../services';

type ContentState = {
  draftContents: ISpiritualDailyDigest[];
  approvedContent: ISpiritualDailyDigest[];
  contentAwaitingApproval: ISpiritualDailyDigest[];
};

const initialState: ContentState = {
  draftContents: [],
  approvedContent: [],
  contentAwaitingApproval: [],
};

export const ContentStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, contentService = inject(ContentService)) => ({
    getDraftContents() {
      return contentService.getDraftContents().pipe(
        retryWhen(firestoreRetryStrategy(Infinity)),
        tap({
          next: (data) => {
            patchState(store, (state) => ({
              ...state,
              draftContents: data,
            }));
          },
        })
      );
    },
    updateDraftContents(updatedDrafts: ISpiritualDailyDigest[]) {
      patchState(store, (state) => ({
        ...state,
        draftContents: updatedDrafts,
      }));
    },
    getContentsAwaitingApproval() {
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
    updateAwaitingApprovalContents(updatedContents: ISpiritualDailyDigest[]) {
      patchState(store, (state) => ({
        ...state,
        contentAwaitingApproval: updatedContents,
      }));
    },
    getApprovedContents() {
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
    updateApprovedContents(updatedContents: ISpiritualDailyDigest[]) {
      patchState(store, (state) => ({
        ...state,
        approvedContent: updatedContents,
      }));
    },
  }))
);
