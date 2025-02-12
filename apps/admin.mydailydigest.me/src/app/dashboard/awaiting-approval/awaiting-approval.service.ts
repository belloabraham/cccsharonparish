import { inject, Injectable } from '@angular/core';
import { COLLECTION, REMOTE_DATA_TOKEN } from '../../services';
import { of } from 'rxjs';
import { ISpiritualDailyDigest } from '@cccsharonparish/mydailydigest';
import { environment } from '../../../environments/environment';
import { AWAITING_APPROVAL_CONTENT_MOCK } from './mock/awaiting-approval-content';

@Injectable({
  providedIn: 'any',
})
export class AwaitingApprovalService {
  private readonly remoteData = inject(REMOTE_DATA_TOKEN);
  readonly USE_MOCK_DATA = environment.useMockData;

  getContentsAwaitingApproval() {
    if (this.USE_MOCK_DATA) {
      return of(AWAITING_APPROVAL_CONTENT_MOCK);
    }
    return this.remoteData.getAListOfDocData<ISpiritualDailyDigest>(
      COLLECTION.AWAITING_APPROVAL,
      []
    );
  }

  markAsApproved(contentAwaitingApproval: ISpiritualDailyDigest) {
    return this.remoteData.runTransaction(async (transaction) => {
      const awaitingApprovalDocRef = this.remoteData.getDocRef(
        COLLECTION.AWAITING_APPROVAL,
        [contentAwaitingApproval.id]
      );

      const approvedDocRef = this.remoteData.getDocRef(COLLECTION.APPROVED, [
        contentAwaitingApproval.id,
      ]);

      transaction.delete(awaitingApprovalDocRef);
      transaction.set(approvedDocRef, {
        ...contentAwaitingApproval,
        isAwaitingApproval: false,
      });
    });
  }
}
