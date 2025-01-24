import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { IUser, IUserUIState, UserType } from '@cccsharonparish/mydailydigest';
import { UserDataService } from './user-data.service';
import { retryWhen, tap } from 'rxjs';
import { firestoreRetryStrategy } from '../../services';

type UserDataState = {
  isLoading: boolean;
  loaded: boolean;
  error: any;
  user: IUser | null;
};

const initialState: UserDataState = {
  loaded: false,
  isLoading: true,
  error: null,
  user: null,
};

export const UserDataStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, userDataService = inject(UserDataService)) => ({
    getUser() {
      return userDataService.getUser().pipe(
        retryWhen(firestoreRetryStrategy(Infinity)),
        tap({
          next: (data) => {
            patchState(store, (state) => ({
              loaded: true,
              isLoading: false,
              error: null,
              user: data,
            }));
          },
        })
      );
    },
    createUser(userUIState: IUserUIState, userType?: UserType) {
      return userDataService.createUser(userUIState, userType).pipe(
        tap({
          next: (data) => {
            patchState(store, (state) => ({
              loaded: true,
              isLoading: false,
              error: null,
              user: data.userData,
            }));
          },
        })
      );
    },
    updateUser(userUIState: IUserUIState, userType?: UserType) {
      return userDataService.updateUser(userUIState, userType).pipe(
        tap({
          next: (data) => {
            patchState(store, (state) => ({
              ...state,
              user: data.userData,
            }));
          },
        })
      );
    },
  }))
);
