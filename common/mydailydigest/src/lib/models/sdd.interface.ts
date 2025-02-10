import { Timestamp } from '@angular/fire/firestore';

export const DEFAULT_LANG_CODE = 'en';
export type ISpiritualDailyDigestTableUIState = ISpiritualDailyDigestUIState & {
  sn: number;
};

export type IAwaitingApprovalContentTableUIState = ISpiritualDailyDigestUIState & {
  sn: number;
  createdBy: string;
  updatedBy: string | null;
};

export interface ISpiritualDailyDigestUIState {
  topic: string;
  message: string;
  reference: string;
  verses: string;
  keyVerse: string;
  tags: string[];
  date: Date;
  imagePath: string | null;
  audioUrl: string | null;
}

export interface ISpiritualDailyDigest extends Record<string, any> {
  id: string; //'day-month-year'; //TODO allow create only security rule
  year: number;
  month: number;
  day: number;
  imagePath: string | null; //
  tags: string[]; // and date
  content: Content[];
  isPublished: boolean;
  isAwaitingApproval: boolean;
  createdBy: string;
  updatedBy: string | null;
  createdAt: any;
  updatedAt: any | null;
  // createdAt: Date | Timestamp;
  // updatedAt?: Date | Timestamp;
}

export type Content = {
  language: Language;
  text: TextContent;
  audioUrl: string | null;
};

export type Language = {
  countryCode: string;
  code: string;
  label: string;
};

export type TextContent = {
  topic: string; //
  message: string; //
  bibleVerse: BibleVerseContent;
};

export type BibleVerseContent = {
  reference: string;
  verses: string;
  keyVerse: string;
};
