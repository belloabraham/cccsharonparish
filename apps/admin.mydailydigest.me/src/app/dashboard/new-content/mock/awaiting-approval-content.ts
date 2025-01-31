import { DEFAULT_LANG_CODE } from '@cccsharonparish/mydailydigest';
import { PUBLISHED_CONTENTS_MOCK } from '../../published-content/mock/published-content';

export const AWAITING_APPROVAL_CONTENT_MOCK = PUBLISHED_CONTENTS_MOCK.map(
  (content) => {
    content.isPublished = false;
    content.isAwaitingApproval = true;
    content.content = [content.content.find((c) => c.language.code === DEFAULT_LANG_CODE)!];
    return content;
  }
);
