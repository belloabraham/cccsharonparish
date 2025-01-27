import { inject, Injectable } from '@angular/core';
import {
  AUTH_TOKEN,
  CLOUD_STORAGE_TOKEN,
  COLLECTION,
  REMOTE_DATA_TOKEN,
  STORAGE_PATH,
} from '../../services';
import {
  BibleVerseContent,
  Content,
  dataURLtoFile,
  ISpiritualDailyDigest,
  ISpiritualDailyDigestUIState,
  Language,
  TextContent,
} from '@cccsharonparish/mydailydigest';
import { Timestamp } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'any',
})
export class ContentService {
  private readonly remoteData = inject(REMOTE_DATA_TOKEN);
  private readonly auth = inject(AUTH_TOKEN);
  private readonly cloudStorage = inject(CLOUD_STORAGE_TOKEN);

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
    const content = this.getContent(sddUIState, language);

    const createdContent: ISpiritualDailyDigest = {
      id: this.getIdFromDate(date),
      year: year,
      month: month,
      day: day,
      imageUrl: sddUIState.imageUrl,
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

  updateContent(
    sddUIiState: ISpiritualDailyDigestUIState,
    language: Language,
    existingSDD: ISpiritualDailyDigest,
    collection: string
  ) {
    const userId = this.auth.getUserId()!;
    const content = this.getContent(sddUIiState, language);
    const updatedContent: ISpiritualDailyDigest = {
      ...existingSDD,
      imageUrl: sddUIiState.imageUrl,
      tags: sddUIiState.tags,
      isAwaitingApproval: false,
      content: [content],
      updatedBy: userId,
      updatedAt: Timestamp.now(),
    };
    return this.remoteData.addADocumentDataTo(
      collection,
      [updatedContent.id],
      updatedContent,
      { merge: true }
    );
  }

  private getContent(
    sddUIiState: ISpiritualDailyDigestUIState,
    language: Language
  ) {
    const bibleVerse: BibleVerseContent = {
      reference: sddUIiState.reference,
      verses: sddUIiState.verses,
      keyVerse: sddUIiState.keyVerse,
    };

    const textContent: TextContent = {
      topic: sddUIiState.topic,
      message: sddUIiState.message,
      bibleVerse: bibleVerse,
    };

    const content: Content = {
      language: language,
      text: textContent,
      audioUrl: sddUIiState.audioUrl,
    };
    return content;
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

  private getContents(collection: string) {
    return this.remoteData.getAListOfDocData<ISpiritualDailyDigest>(
      collection,
      []
    );
  }

  getDraftContents() {
    return this.getContents(COLLECTION.DRAFT);
  }

  getApprovedContents() {
    return this.getContents(COLLECTION.APPROVED);
  }

  getContentsAwaitingApproval() {
    return this.getContents(COLLECTION.AWAITING_APPROVAL);
  }
}
