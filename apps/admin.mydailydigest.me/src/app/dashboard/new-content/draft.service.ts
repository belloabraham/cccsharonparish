import { inject, Injectable } from '@angular/core';
import {
  AUTH_TOKEN,
  CLOUD_STORAGE_TOKEN,
  COLLECTION,
  REMOTE_DATA_TOKEN,
  STORAGE_PATH,
} from '../../services';
import {
  dataURLtoFile,
  ISpiritualDailyDigest,
  ISpiritualDailyDigestUIState,
  Language,
} from '@cccsharonparish/mydailydigest';
import {
  limit,
  orderBy,
  Timestamp,
} from '@angular/fire/firestore';
import { environment } from '../../../../src/environments/environment';
import { of } from 'rxjs';
import { DRAFT_CONTENT_MOCK } from './mock/draft-content';
import { getContentFromUIState } from '../shared';

@Injectable({
  providedIn: 'any',
})
export class DraftService {
  private readonly remoteData = inject(REMOTE_DATA_TOKEN);
  private readonly auth = inject(AUTH_TOKEN);
  private readonly cloudStorage = inject(CLOUD_STORAGE_TOKEN);
  readonly USE_MOCK_DATA = environment.useMockData;

  createContent(
    sddUIState: ISpiritualDailyDigestUIState,
    language: Language,
    collection: string
  ) {
    const userId = this.auth.getUserId()!;
    const date = sddUIState.date;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const content = getContentFromUIState(sddUIState, language);

    const createdContent: ISpiritualDailyDigest = {
      id: this.getIdFromDate(date),
      year: year,
      month: month,
      day: day,
      imagePath: sddUIState.imagePath,
      tags: sddUIState.tags,
      content: [content],
      isAwaitingApproval: false,
      createdBy: userId,
      createdAt: Timestamp.now(),
    };
    return this.remoteData.addADocumentDataTo(
      collection,
      [createdContent.id],
      createdContent,
      { merge: false }
    );
  }

  private getIdFromDate(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${day}-${month}-${year}`;
  }

  uploadDraftContentHeaderImage(dataURL: string, fileNameWithExt: string) {
    const imageFile = dataURLtoFile(dataURL, fileNameWithExt);
    return this.cloudStorage.uploadFileTo(
      [STORAGE_PATH.DRAFT, STORAGE_PATH.IMAGES, STORAGE_PATH.HEADERS],
      fileNameWithExt,
      imageFile
    );
  }

  uploadAudio(audioFile: File, pathSegment: string[]) {
    return this.cloudStorage.uploadFileTo(
      [...pathSegment],
      audioFile.name,
      audioFile
    );
  }

  getDraftContents() {
    if (this.USE_MOCK_DATA) {
      return of(DRAFT_CONTENT_MOCK);
    }
    return this.remoteData.getListOfDocumentDataWithQueryAsync<ISpiritualDailyDigest>(
      COLLECTION.DRAFT,
      [],
      [orderBy('year', 'desc'), limit(365)]
    );
  }

  submitForReview(draft: ISpiritualDailyDigest) {
    return this.remoteData.runTransaction(async (transaction) => {

      const draftDocRef = this.remoteData.getDocRef(COLLECTION.DRAFT, [
        draft.id,
      ]);
      const awaitingApprovalDocRef = this.remoteData.getDocRef(
        COLLECTION.AWAITING_APPROVAL,
        [draft.id]
      );
      transaction.update(draftDocRef, {
        isAwaitingApproval: true,
      });
      transaction.set(awaitingApprovalDocRef, {
        ...draft,
        isAwaitingApproval: true,
      });
    });
  }
}
