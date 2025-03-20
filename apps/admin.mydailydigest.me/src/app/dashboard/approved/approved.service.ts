import { inject, Injectable } from '@angular/core';
import { COLLECTION, REMOTE_DATA_TOKEN } from '../../services';
import { of } from 'rxjs';
import {
  IPublishedContentYear,
  ISpiritualDailyDigest,
} from '@cccsharonparish/mydailydigest';
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

  publishAll(approvedContents: ISpiritualDailyDigest[]) {
    return this.remoteData.runTransaction(async (transaction) => {
      for (let index = 0; index < approvedContents.length; index++) {
        const approvedContent = approvedContents[index];

        const approvedDocRef = this.remoteData.getDocRef(COLLECTION.APPROVED, [
          approvedContent.id,
        ]);

        const publishedDocRef = this.remoteData.getDocRef(
          COLLECTION.PUBLISHED,
          [approvedContent.id]
        );

        const publishedContentYearsDocRef = this.remoteData.getDocRef(
          COLLECTION.PUBLISHED_CONTENT_YEARS,
          [`${approvedContent.year}`]
        );
        const publishedContentYear: IPublishedContentYear = {
          year: approvedContent.year,
        };
        transaction.set(publishedContentYearsDocRef, publishedContentYear);
        transaction.delete(approvedDocRef);
        transaction.set(publishedDocRef, {
          ...approvedContent,
          isPublished: true,
          isAwaitingApproval: false,
        });
      }
    });
  }

  publish(approvedContent: ISpiritualDailyDigest) {
    return this.remoteData.runTransaction(async (transaction) => {
      const approvedDocRef = this.remoteData.getDocRef(COLLECTION.APPROVED, [
        approvedContent.id,
      ]);

      const publishedDocRef = this.remoteData.getDocRef(COLLECTION.PUBLISHED, [
        approvedContent.id,
      ]);
      const publishedContentYearsDocRef = this.remoteData.getDocRef(
        COLLECTION.PUBLISHED_CONTENT_YEARS,
        [`${approvedContent.year}`]
      );
      const publishedContentYear: IPublishedContentYear = {
        year: approvedContent.year,
      };
      transaction.set(publishedContentYearsDocRef, publishedContentYear);
      transaction.delete(approvedDocRef);
      transaction.set(publishedDocRef, {
        ...approvedContent,
        isPublished: true,
        isAwaitingApproval: false,
      });
    });
  }
}
