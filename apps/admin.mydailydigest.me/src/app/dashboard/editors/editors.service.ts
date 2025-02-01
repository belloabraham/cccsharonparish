import { inject, Injectable } from '@angular/core';
import { COLLECTION, REMOTE_DATA_TOKEN } from '../../services';
import { IUser } from '@cccsharonparish/mydailydigest';
import { where } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import { AWAITING_APPROVAL_CONTENT_MOCK } from '../awaiting-approval/mock/awaiting-approval-content';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class EditorsService {
  private readonly remoteData = inject(REMOTE_DATA_TOKEN);
  readonly USE_MOCK_DATA = environment.useMockData;

  getEditors() {
    if (this.USE_MOCK_DATA) {
      return of(AWAITING_APPROVAL_CONTENT_MOCK);
    }
    return this.remoteData.getListOfDocumentDataWithQueryAsync<IUser>(
      COLLECTION.EDITORS,
      [],
      [where('userType', '!=', 'Admin')]
    );
  }
}
