import { ISpiritualDailyDigestUIState } from "@cccsharonparish/mydailydigest";

const newContentTableStateKeys = {
  sn: 0,
  date: new Date(),
  topic: '',
  message: '',
  reference: '',
  verses: '',
  keyVerse: '',
  imagePath: '',
  audioUrl: '',
  tags: [],
};

export const NEW_CONTENT_TABLE_COLUMNS = Object.keys(
  newContentTableStateKeys
) as (keyof (ISpiritualDailyDigestUIState & { sn: number }))[];
