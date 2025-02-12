import { ISpiritualDailyDigestUIState } from "@cccsharonparish/mydailydigest";

const publishedTableStateKeys = {
  sn: 0,
  date: new Date(),
  topic: '',
  message: '',
  reference: '',
  imagePath: '',
  audioUrl: '',
};

export const PUBLISHED_TABLE_COLUMNS = Object.keys(
  publishedTableStateKeys
) as (keyof ISpiritualDailyDigestUIState)[];
