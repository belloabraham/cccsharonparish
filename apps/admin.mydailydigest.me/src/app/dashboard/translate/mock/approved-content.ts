import {
  ENGLISH_LANG_CODE,
  ISpiritualDailyDigest,
} from '@cccsharonparish/mydailydigest';
import { CONTENT_MOCK } from '../../mock/mock';

const MOCK: ISpiritualDailyDigest[] = [...CONTENT_MOCK];

export const APPROVED_CONTENT_MOCK = MOCK.map((content) => {
  content.isPublished = false;
  content.content = [
    content.content.find((c) => c.language.code === ENGLISH_LANG_CODE)!,
  ];
  return content;
});
