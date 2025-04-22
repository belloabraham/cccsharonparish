import { inject, Injectable } from '@angular/core';
import {
  CLOUD_STORAGE_TOKEN,
  COLLECTION,
  REMOTE_DATA_TOKEN,
  STORAGE_PATH,
} from '../../services';
import { of } from 'rxjs';
import {
  ENGLISH_LANG_CODE,
  ISpiritualDailyDigest,
} from '@cccsharonparish/mydailydigest';
import { environment } from '../../../environments/environment';
import { AWAITING_APPROVAL_CONTENT_MOCK } from './mock/awaiting-approval-content';

@Injectable({
  providedIn: 'any',
})
export class AwaitingApprovalService {
  private readonly remoteData = inject(REMOTE_DATA_TOKEN);
  readonly USE_MOCK_DATA = environment.useMockData;
  private readonly cloudStorage = inject(CLOUD_STORAGE_TOKEN);

  getContentsAwaitingApproval() {
    if (this.USE_MOCK_DATA) {
      return of(AWAITING_APPROVAL_CONTENT_MOCK);
    }
    return this.remoteData.getAListOfDocData<ISpiritualDailyDigest>(
      COLLECTION.AWAITING_APPROVAL,
      []
    );
  }

  async copyImageHeaderFileToPublished(oldPathToImageFile: string | null) {
    let newPathToImageFile: string | null = null;
    if (oldPathToImageFile) {
      newPathToImageFile = oldPathToImageFile.replace(
        /^[^/]+/,
        STORAGE_PATH.PUBLISHED
      );
      await this.cloudStorage.copyFileTo(
        oldPathToImageFile,
        newPathToImageFile
      );
      return newPathToImageFile;
    }
    return newPathToImageFile;
  }

  async copyAudioFileToPublished(url: string | null) {
    if (url) {
      const uploadResult = await this.cloudStorage.copyFileFromUrlTo(
        url,
        [STORAGE_PATH.PUBLISHED, STORAGE_PATH.AUDIO, ENGLISH_LANG_CODE].join(
          '/'
        )
      );
      const newUrl = await this.cloudStorage.getFileDownloadURLAsync(
        uploadResult.ref
      );
      return newUrl;
    }
    return url;
  }

  async markAsApproved(contentAwaitingApproval: ISpiritualDailyDigest) {
    const existingHeaderImagePath = contentAwaitingApproval.imagePath;
    const newHeaderImagePath = await this.copyImageHeaderFileToPublished(
      existingHeaderImagePath
    );
    const contentAwaitingApprovalAudioUrl =
      contentAwaitingApproval.contents[0].audioUrl;
    const newContentAwaitingApprovalAudioUrl =
      await this.copyAudioFileToPublished(contentAwaitingApprovalAudioUrl);

    await this.remoteData.runTransaction(async (transaction) => {
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
        contents: [
          {
            ...contentAwaitingApproval.contents[0],
            audioUrl: newContentAwaitingApprovalAudioUrl,
          },
        ],
        isAwaitingApproval: false,
        imagePath: newHeaderImagePath,
      });
    });
  }
}
