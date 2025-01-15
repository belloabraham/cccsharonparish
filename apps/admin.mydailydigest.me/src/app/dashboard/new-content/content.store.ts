import {
  signalStore,
  withState,
  withMethods,
  patchState,
} from '@ngrx/signals';
import { inject } from '@angular/core';
import {
  ISpiritualDailyDigest,
  Language,
} from '@cccsharonparish/mydailydigest';

type ContentState = {
  forTheCurrentYear: {
    isLoading: boolean;
    content: ISpiritualDailyDigest[];
    error: any;
  };
};

const initialState: ContentState = {
  forTheCurrentYear: {
    content: [],
    isLoading: true,
    error: null,
  },
};

export const ContentStore = signalStore(
  withState(initialState),
  withMethods((store) => ({
    loadContentForTheCurrentYear(): void {
      patchState(store, (state) => ({
        ...state,
        forTheCurrentYear: { content: [], isLoading: true, error: null },
      }));
    },
  })),
);
