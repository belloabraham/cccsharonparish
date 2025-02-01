import { inject, Injectable } from '@angular/core';
import {  COLLECTION, REMOTE_DATA_TOKEN } from '../../services';
import { of } from 'rxjs';
import { ISpiritualDailyDigest } from '@cccsharonparish/mydailydigest';
import { environment } from '../../../environments/environment';
import { APPROVED_CONTENT_MOCK } from './mock/approved-content';

@Injectable({
  providedIn: 'any',
})
export class ApprovedService {
  private readonly remoteData = inject(REMOTE_DATA_TOKEN);
  readonly USE_MOCK_DATA = environment.useMockData;

  getApprovedContents() {
    if (this.USE_MOCK_DATA) {
      return of(APPROVED_CONTENT_MOCK);
    }
    return this.remoteData.getAListOfDocData<ISpiritualDailyDigest>(
      COLLECTION.APPROVED,
      []
    );
  }
}
