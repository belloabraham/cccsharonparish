import {
  ISpiritualDailyDigest,
  ISpiritualDailyDigestUIState,
  Language,
  LanguageContent,
} from '@cccsharonparish/mydailydigest';

export interface IDialogData {
  language: Language;
  existingContentUIState?: ISpiritualDailyDigestUIState;
  existingContent?: ISpiritualDailyDigest;
  englishVersion?: LanguageContent;
  rootStoragePath: string;
  rootDataPath: string;
}
