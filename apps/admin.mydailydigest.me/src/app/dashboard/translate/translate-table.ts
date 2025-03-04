import { ISpiritualDailyDigestUIState } from '@cccsharonparish/mydailydigest';

const translateContentTableStateKeys = {
  sn: 0,
  topic: '',
  message: '',
  reference: '',
  verses: '',
  keyVerse: '',
  supplication: '',
  reflection: '',
  audioUrl: '',
};

export const TRANSLATE_CONTENT_TABLE_COLUMNS = Object.keys(
  translateContentTableStateKeys
) as (keyof (ISpiritualDailyDigestUIState & { sn: number }))[];
