import {
  PUBLISHED_TABLE_COLUMNS,
  publishedTableStateKeys,
} from './published-content-table';

describe('PUBLISHED_TABLE_COLUMNS', () => {
  it('should contain all expected keys', () => {
    expect(PUBLISHED_TABLE_COLUMNS).toEqual([
      'sn',
      'date',
      'topic',
      'message',
      'reference',
      'supplication',
      'reflection',
      'imagePath',
      'audioUrl',
    ]);
  });
  it('should not contain unexpected keys', () => {
    const allowedKeys = Object.keys(publishedTableStateKeys);
    const actualKeys = PUBLISHED_TABLE_COLUMNS;
    expect(actualKeys.every((key) => allowedKeys.includes(key))).toBe(true);
  });
});
