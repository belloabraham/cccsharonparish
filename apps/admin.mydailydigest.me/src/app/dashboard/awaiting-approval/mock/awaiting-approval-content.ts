import {
  ENGLISH_LANG_CODE,
} from '@cccsharonparish/mydailydigest';
import { CONTENT_MOCK } from '../../mock/mock';

export const AWAITING_APPROVAL_CONTENT_MOCK = CONTENT_MOCK.map((content) => {
  return {
    ...content,
    isPublished: false,
    isAwaitingApproval: true,
    content: [
      content.content.find((c) => c.language.code === ENGLISH_LANG_CODE)!,
    ],
  };
});
