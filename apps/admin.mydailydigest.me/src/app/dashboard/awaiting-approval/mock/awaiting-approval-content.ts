import {
  ENGLISH_LANG_CODE,
  ISpiritualDailyDigest,
} from '@cccsharonparish/mydailydigest';
import { CONTENT_MOCK } from '../../mock/mock';

const MOCK: ISpiritualDailyDigest[] = [...CONTENT_MOCK];

export const AWAITING_APPROVAL_CONTENT_MOCK = MOCK.map((content) => {
  return {
    ...content,
    isPublished: false,
    isAwaitingApproval: true,
    content: [
      content.content.find((c) => c.language.code === ENGLISH_LANG_CODE)!,
    ],
  };
});
