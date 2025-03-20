import { ISpiritualDailyDigestUIState } from "@cccsharonparish/mydailydigest";

export const publishedTableStateKeys = {
  sn: 0,
  date: '',
  topic: '',
  message: '',
  reference: '',
  supplication: '',
  reflection: '',
  imagePath: '',
  audioUrl: '',
};

export const PUBLISHED_TABLE_COLUMNS = Object.keys(
  publishedTableStateKeys
) as (keyof (ISpiritualDailyDigestUIState & { sn: number }))[];
