import { inject, Injectable } from '@angular/core';
import { COLLECTION, REMOTE_DATA_TOKEN } from '../../services';
import { IUser } from '@cccsharonparish/mydailydigest';
import { where } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import { of } from 'rxjs';
import { EDITORS_MOCK } from './mock/editors';

@Injectable({
  providedIn: 'any',
})
export class EditorsService {
  private readonly remoteData = inject(REMOTE_DATA_TOKEN);
  readonly USE_MOCK_DATA = environment.useMockData;

  getEditors() {
    if (environment.useMockData) {
      return of(EDITORS_MOCK);
    }
    return this.remoteData.getListOfDocumentDataWithQueryAsync<IUser>(
      COLLECTION.EDITORS,
      [],
      [where('userType', '!=', 'Admin')]
    );
  }
}
