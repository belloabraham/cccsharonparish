import { ISpiritualDailyDigestUIState } from '@cccsharonparish/mydailydigest';

export const newContentTableStateKeys = {
  sn: 0,
  createdBy: '',
  date: '',
  topic: '',
  message: '',
  reference: '',
  verses: '',
  keyVerse: '',
  supplication: '',
  reflection: '',
  imagePath: '',
  audioUrl: '',
  tags: [],
};

export const NEW_CONTENT_TABLE_COLUMNS = Object.keys(
  newContentTableStateKeys
) as (keyof (ISpiritualDailyDigestUIState & {
  sn: number;
  createdBy: string;
}))[];
