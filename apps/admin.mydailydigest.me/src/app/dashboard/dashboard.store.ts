import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { Language } from '@cccsharonparish/mydailydigest';
import { DashboardService } from './dashboard.service';
import { retryWhen, tap } from 'rxjs';
import { firestoreRetryStrategy } from '../services';

type DashboardState = {
  supportedLanguages: {
    isLoading: boolean;
    loaded: boolean;
    languages: Language[];
    error: any;
  };
};

const initialState: DashboardState = {
  supportedLanguages: {
    isLoading: true,
    loaded: false,
    languages: [],
    error: null,
  },
};

export const DashboardStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, dashboardService = inject(DashboardService)) => ({
    getSupportedLanguages() {
      patchState(store, (state) => ({
        ...state,
        supportedLanguages: {
          languages: [],
          isLoading: true,
          error: null,
          loaded: false,
        },
      }));

      return dashboardService.getSupportedLanguages().pipe(
        retryWhen(firestoreRetryStrategy(Infinity)),
        tap({
          next: (data) => {
            patchState(store, (state) => ({
              ...state,
              supportedLanguages: {
                isLoading: false,
                languages: data,
                error: null,
                loaded: true,
              },
            }));
          },
        })
      );
    },
  }))
);
