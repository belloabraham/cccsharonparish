import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { IUser, Language } from '@cccsharonparish/mydailydigest';
import { retryWhen, tap } from 'rxjs';
import { EditorsService } from './editors.service';
import { firestoreRetryStrategy } from '../../services';

type EditorsState = {
  editors: IUser[];
};

const initialState: EditorsState = {
  editors: [],
};

export const EditorsStore = signalStore(
  withState(initialState),
  withMethods((store, editorsService = inject(EditorsService)) => ({
    getEditors() {
      return editorsService.getEditors().pipe(
        retryWhen(firestoreRetryStrategy(Infinity)),
        tap({
          next: (data) => {
            patchState(store, (state) => ({
              editors: data,
            }));
          },
        })
      );
    },
  }))
);
