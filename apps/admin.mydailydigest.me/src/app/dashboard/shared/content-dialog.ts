import {
  ISpiritualDailyDigest,
  ISpiritualDailyDigestUIState,
  Language,
} from '@cccsharonparish/mydailydigest';

export interface IDialogData {
  language: Language;
  existingContentUIState?: ISpiritualDailyDigestUIState;
  existingContent?: ISpiritualDailyDigest;
  englishVersion?: string;
  rootStoragePath: string;
  rootDataPath: string;
}
