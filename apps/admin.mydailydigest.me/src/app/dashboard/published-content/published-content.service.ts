import { inject, Injectable } from '@angular/core';
import { COLLECTION, REMOTE_DATA_TOKEN } from '../../services';
import {
  IPublishedContentYear,
  ISpiritualDailyDigest,
} from '@cccsharonparish/mydailydigest';
import { where } from '@angular/fire/firestore';
import { environment } from '../../../../src/environments/environment';
import { CONTENT_YEARS_MOCK } from './mock/content-years';
import { of } from 'rxjs';
import { PUBLISHED_CONTENTS_MOCK } from './mock/published-content';

@Injectable({
  providedIn: 'any',
})
export class PublishedContentService {
  private readonly remoteData = inject(REMOTE_DATA_TOKEN);
  readonly USE_MOCK_DATA = environment.useMockData;

  getPublishedContentYears() {
    if (this.USE_MOCK_DATA) {
      return of(CONTENT_YEARS_MOCK);
    }
    return this.remoteData.getAListOfDocData<IPublishedContentYear>(
      COLLECTION.PUBLISHED_CONTENT_YEARS,
      []
    );
  }

  getPublishedContentsByAYear(year: number) {
    if (this.USE_MOCK_DATA) {
      return of(PUBLISHED_CONTENTS_MOCK);
    }
    return this.remoteData.getListOfDocumentDataWithQueryAsync<ISpiritualDailyDigest>(
      COLLECTION.PUBLISHED,
      [],
      [where('year', '==', year)]
    );
  }
}
