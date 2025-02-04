import { inject, Injectable } from '@angular/core';
import { ApprovedService } from '../approved/approved.service';
import { DraftService } from '../new-content/draft.service';
import { TranslateService } from '../translate/translate.service';
import { AwaitingApprovalService } from '../awaiting-approval/awaiting-approval.service';
import {
  BibleVerseContent,
  Content,
  ISpiritualDailyDigest,
  ISpiritualDailyDigestUIState,
  Language,
  TextContent,
} from '@cccsharonparish/mydailydigest';
import { Timestamp } from '@angular/fire/firestore';
import { AUTH_TOKEN, REMOTE_DATA_TOKEN } from '../../services';

export function getContentFromUIState(
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
  };
  if (sddUIiState.audioUrl) {
    content.audioUrl = sddUIiState.audioUrl;
  }

  return content;
}

@Injectable({
  providedIn: 'any',
})
export class ContentService {
  private readonly draftService = inject(DraftService);
  private readonly approvedService = inject(ApprovedService);
  private readonly translateService = inject(TranslateService);
  private readonly awaitingApprovalService = inject(AwaitingApprovalService);
  private readonly remoteData = inject(REMOTE_DATA_TOKEN);
  private readonly auth = inject(AUTH_TOKEN);

  updateContent(
    newContent: ISpiritualDailyDigestUIState,
    existingContent: ISpiritualDailyDigest,
    language: Language,
    collection: string
  ) {
    const userId = this.auth.getUserId()!;
    const content = getContentFromUIState(newContent, language);
    const contents = existingContent.content.filter(
      (content) => content.language.code !== language.code
    );
    const updatedContent: Partial<ISpiritualDailyDigest> = {
      tags: newContent.tags,
      isAwaitingApproval: false,
      content: [content, ...contents],
      updatedBy: userId,
      updatedAt: Timestamp.now(),
      imagePath: newContent.imagePath || existingContent.imagePath,
    };

    return this.remoteData.updateADocumentDataIn(
      collection,
      [existingContent.id],
      updatedContent
    );
  }

  getDraftContents() {
    return this.draftService.getDraftContents();
  }

  getContentsAwaitingApproval() {
    return this.awaitingApprovalService.getContentsAwaitingApproval();
  }

  getApprovedContents() {
    return this.approvedService.getApprovedContents();
  }
}
