import { ENGLISH_LANG_CODE } from '@cccsharonparish/mydailydigest';
import { CONTENT_MOCK } from '../../mock/mock';

export const DRAFT_CONTENT_MOCK = CONTENT_MOCK.map((content) => {
  return {
    ...content,
    isPublished: false,
    contents: [
      content.contents.find((c) => c.language.code === ENGLISH_LANG_CODE)!,
    ],
  };
});
