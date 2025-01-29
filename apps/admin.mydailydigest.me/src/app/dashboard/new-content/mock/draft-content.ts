import { PUBLISHED_CONTENTS_MOCK } from '../../published-content/mock/published-content';

export const DRAFT_CONTENT_MOCK = PUBLISHED_CONTENTS_MOCK.map((content) => {
  content.isPublished = false;
  content.content = [content.content.find((c) => c.language.code === 'en')!];
  return content;
});
