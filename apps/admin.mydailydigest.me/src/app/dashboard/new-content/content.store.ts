import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';
import {
  ISpiritualDailyDigest,
  Language,
} from '@cccsharonparish/mydailydigest';

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
  withMethods((store) => ({
    getDraftContentForTheYear(): void {
      patchState(store, (state) => ({
        ...state,
        draftContentForTheYear: [],
        approvedContent: [],
        contentAwaitingApproval: [],
      }));

      

    },
  }))
);
