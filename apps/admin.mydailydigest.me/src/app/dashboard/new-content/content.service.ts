import { inject, Injectable } from '@angular/core';
import {
  AUTH_TOKEN,
  CLOUD_STORAGE_TOKEN,
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

  createDraftContent(
    sddUIState: ISpiritualDailyDigestUIState,
    language: Language
  ) {
    const userId = this.auth.getUserId()!;
    const date = sddUIState.date;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const content = this.getContent(sddUIState, language);

    const newSDD: ISpiritualDailyDigest = {
      id: this.getIdFromDate(date),
      year: year,
      month: month,
      day: day,
      imageUrl: sddUIState.imageUrl,
      tags: sddUIState.tags,
      content: [content],
      isPublished: false,
      isApproved: false,
      createdBy: userId,
      createdAt: Timestamp.now(),
    };
  }

  updateDraftContent(
    sddUIiState: ISpiritualDailyDigestUIState,
    language: Language,
    existingSDD: ISpiritualDailyDigest
  ) {
    const userId = this.auth.getUserId()!;
    const content = this.getContent(sddUIiState, language);
    const updatedDraftContent: ISpiritualDailyDigest = {
      ...existingSDD,
      imageUrl: sddUIiState.imageUrl,
      tags: sddUIiState.tags,
      content: [content],
      updatedBy: userId,
      updatedAt: Timestamp.now(),
    };
  }

  private getContent(sddUIiState: ISpiritualDailyDigestUIState, language: Language) {
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

  getIdFromDate(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  }

  uploadContentHeaderImage(dataURL: string, fileNameWithExt: string) {
    const imageFile = dataURLtoFile(dataURL, fileNameWithExt);
    return this.cloudStorage.uploadFileTo(
      [STORAGE_PATH.DRAFT, STORAGE_PATH.IMAGES, STORAGE_PATH.HEADERS],
      fileNameWithExt,
      imageFile
    );
  }
}
