
import { CONTENT_MOCK } from '../../mock/mock';

export const APPROVED_CONTENT_MOCK = CONTENT_MOCK.map((content) => {
  return {
    ...content,
    isPublished: false,
  };
});
