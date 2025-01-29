import { inject, Injectable } from '@angular/core';
import { COLLECTION, REMOTE_DATA_TOKEN } from '../../services';
import { IPublishedContentYear, ISpiritualDailyDigest } from '@cccsharonparish/mydailydigest';
import { where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'any',
})
export class PublishedContentService {
  private readonly remoteData = inject(REMOTE_DATA_TOKEN);

  getPublishedContentYears() {
    return this.remoteData.getAListOfDocData<IPublishedContentYear>(
      COLLECTION.PUBLISHED_CONTENT_YEARS,
      []
    );
  }

  getPublishedContentsByAYear(year:number) {
    return this.remoteData.getListOfDocumentDataWithQueryAsync<ISpiritualDailyDigest>(
      COLLECTION.PUBLISHED,
      [],
      [where('year', '==', year)]
    );
  }
}
