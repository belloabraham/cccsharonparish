import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { IUser } from '@cccsharonparish/mydailydigest';
import { UserDataService } from './user-data.service';
import { firestoreRetryStrategy } from '../../services/data/remote/retry-strategy';
import { retryWhen } from 'rxjs';

type UserDataState = {
  isLoading: boolean;
  loaded: boolean;
  error: any;
  data: IUser | null;
};

const initialState: UserDataState = {
  loaded: false,
  isLoading: true,
  error: null,
  data: null,
};

export const UserDataStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, userDataService = inject(UserDataService)) => ({
    getUser(): void {
      patchState(store, (state) => ({
        loaded: false,
        isLoading: true,
        error: null,
        data: null,
      }));

      userDataService
        .getUser()
        .pipe(retryWhen(firestoreRetryStrategy(Infinity)))
        .subscribe({
          next: (data) => {
            patchState(store, (state) => ({
              loaded: true,
              isLoading: false,
              error: null,
              data: data,
            }));
          },
        });
    },
  }))
);
