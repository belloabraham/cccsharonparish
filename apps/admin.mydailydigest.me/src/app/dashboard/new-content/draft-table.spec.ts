import {
  NEW_CONTENT_TABLE_COLUMNS,
  newContentTableStateKeys,
} from './draft-table';

describe('NEW_CONTENT_TABLE_COLUMNS', () => {
  it('should contain all expected keys', () => {
    expect(NEW_CONTENT_TABLE_COLUMNS).toEqual([
      'sn',
      'date',
      'topic',
      'message',
      'reference',
      'verses',
      'keyVerse',
      'supplication',
      'reflection',
      'imagePath',
      'audioUrl',
      'tags',
    ]);
  });

  it('should not contain unexpected keys', () => {
    const allowedKeys = Object.keys(newContentTableStateKeys);
    const actualKeys = NEW_CONTENT_TABLE_COLUMNS;
    expect(actualKeys.every((key) => allowedKeys.includes(key))).toBe(true);
  });
});
