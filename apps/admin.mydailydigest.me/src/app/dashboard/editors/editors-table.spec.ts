import {
  EDITORS_TABLE_COLUMNS,
  editorsTableUIState,
  EditorTableUIState,
} from './editors-table';

describe('EDITORS_TABLE_COLUMNS', () => {
  it('should contain all expected keys', () => {
    expect(EDITORS_TABLE_COLUMNS).toEqual([
      'sn',
      'firstName',
      'lastName',
      'phone',
      'email',
      'userType',
    ]);
  });

  it('should only contain valid keys from EditorTableUIState', () => {
    const validKeys: (keyof EditorTableUIState)[] = [
      'sn',
      'id',
      'email',
      'phone',
      'firstName',
      'lastName',
      'imageUrl',
      'createdOn',
      'updatedOn',
      'userType',
    ];
    EDITORS_TABLE_COLUMNS.forEach((key) => {
      expect(validKeys.includes(key as keyof EditorTableUIState)).toBe(true);
    });
  });

  it('should not contain unexpected keys', () => {
    const allowedKeys = Object.keys(editorsTableUIState);
    const actualKeys = EDITORS_TABLE_COLUMNS;
    expect(actualKeys.every((key) => allowedKeys.includes(key))).toBe(true);
  });
});
