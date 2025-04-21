import {
  TRANSLATE_CONTENT_TABLE_COLUMNS,
  translateContentTableStateKeys,
} from './translate-table';

describe('TRANSLATE_CONTENT_TABLE_COLUMNS', () => {
  it('should contain all expected keys', () => {
    expect(TRANSLATE_CONTENT_TABLE_COLUMNS).toEqual([
      'sn',
      'topic',
      'message',
      'reference',
      'verses',
      'keyVerse',
      'supplication',
      'reflection',
      'audioUrl',
    ]);
  });

  it('should not contain unexpected keys', () => {
    const allowedKeys = Object.keys(translateContentTableStateKeys);
    const actualKeys = TRANSLATE_CONTENT_TABLE_COLUMNS;
    expect(actualKeys.every((key) => allowedKeys.includes(key))).toBe(true);
  });
});
