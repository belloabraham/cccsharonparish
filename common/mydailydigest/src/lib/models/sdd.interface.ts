
export const ENGLISH_LANG_CODE = 'en';
export type ISpiritualDailyDigestTableUIState = ISpiritualDailyDigestUIState & {
  sn: number;
  createdBy: string;
};

export type IAwaitingApprovalContentTableUIState =
  ISpiritualDailyDigestUIState & {
    sn: number;
    createdBy: string;
    updatedBy: string | null;
  };

export type IApprovedTableUIState = ISpiritualDailyDigest & { sn: number, date:Date };

export interface ISpiritualDailyDigestUIState {
  id: string;
  topic: string;
  message: string;
  reference: string;
  verses: string;
  keyVerse: string;
  tags: string[];
  date: Date;
  imagePath: string | null;
  audioUrl: string | null;
  supplication: string;
  reflection: string;
  isAwaitingApproval: boolean;
}

export interface ISpiritualDailyDigestTranslateUIState {
  sn: number;
  id: string;
  imagePath: string | null;
  date: Date;
  tags: string[];
  englishContent: LanguageContent;
  languageContent: LanguageContent;
}

export interface LanguageContent {
  topic: string;
  reference: string;
  verses: string;
  keyVerse: string;
  message: string;
  audioUrl: string | null;
  supplication: string;
  reflection: string;
}

export interface ISpiritualDailyDigest extends Record<string, any> {
  id: string;
  year: number;
  month: number;
  day: number;
  imagePath: string | null;
  tags: string[];
  contents: Content[];
  isPublished: boolean;
  isAwaitingApproval: boolean;
  createdBy: string;
  updatedBy: string | null;
  createdAt: any;
  updatedAt: any | null;
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
  topic: string;
  message: string;
  bibleVerse: BibleVerseContent;
  supplication: string;
  reflection: string;
};

export type BibleVerseContent = {
  reference: string;
  verses: string;
  keyVerse: string;
};
