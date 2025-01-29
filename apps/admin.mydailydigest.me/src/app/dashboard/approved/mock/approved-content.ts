import { PUBLISHED_CONTENTS_MOCK } from '../../published-content/mock/publish-content';

export const APPROVED_CONTENT_MOCK = PUBLISHED_CONTENTS_MOCK.map((content) => {
  content.isPublished = false;
  content.content = [content.content.find((c) => c.language.code === 'en')!];
  return content;
});
