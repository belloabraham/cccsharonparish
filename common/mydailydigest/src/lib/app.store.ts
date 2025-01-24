import {
  signalStore,
  withState,
  withHooks,
  withMethods,
  patchState,
} from '@ngrx/signals';
import { inject } from '@angular/core';
import { LANGUAGE, LanguageResourceService } from '@cccsharonparish/angular';

type AppState = {
  language: {
    isLoading: boolean;
    loaded: boolean;
    error: any;
  };
};

const initialState: AppState = {
  language: {
    loaded: false,
    isLoading: true,
    error: null,
  },
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, languageService = inject(LanguageResourceService)) => ({
    loadLanguageResource(): void {
      patchState(store, (state) => ({
        ...state,
        language: { loaded: false, isLoading: true, error: null },
      }));
      languageService.loadLanguageResource(LANGUAGE.ENGLISH).subscribe({
        next: () => {
          patchState(store, (state) => ({
            ...state,
            language: { loaded: true, isLoading: false, error: null },
          }));
        },
        error: (error) => {
          patchState(store, (state) => ({
            ...state,
            language: { ...state.language, error: error },
          }));
        },
      });
    },
  })),
  withHooks({
    onInit(store) {
      store.loadLanguageResource();
    },
  })
);
