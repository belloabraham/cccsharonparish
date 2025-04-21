import { TABLE_STRING_RESOURCE_KEYS } from '../../shared';
import { EDITORS_STRING_RESOURCE_KEY } from './string-res-keys';

describe('EDITORS_STRING_RESOURCE_KEY', () => {
  it('should have the correct additional keys and values', () => {
    expect(EDITORS_STRING_RESOURCE_KEY).toMatchObject({
      EDITORS: 'editors',
    });
  });

  it('should not contain unexpected keys', () => {
    const allowedKeys = [...Object.keys(TABLE_STRING_RESOURCE_KEYS), 'EDITORS'];
    const actualKeys = Object.keys(EDITORS_STRING_RESOURCE_KEY);

    expect(actualKeys.every((key) => allowedKeys.includes(key))).toBe(true);
  });
});
