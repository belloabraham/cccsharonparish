import { TABLE_STRING_RESOURCE_KEYS } from "./table";

describe('TABLE_STRING_RESOURCE_KEYS', () => {
  it('should have the correct keys and values', () => {
    expect(TABLE_STRING_RESOURCE_KEYS).toEqual({
      SEARCH_PLACEHOLDER: 'search_placeholder',
      EDIT: 'edit',
      YES: 'yes',
      NO: 'no',
    });
  });

  it('should contain specific keys', () => {
    expect(TABLE_STRING_RESOURCE_KEYS).toHaveProperty(
      'SEARCH_PLACEHOLDER',
      'search_placeholder'
    );
    expect(TABLE_STRING_RESOURCE_KEYS).toHaveProperty('EDIT', 'edit');
    expect(TABLE_STRING_RESOURCE_KEYS).toHaveProperty('YES', 'yes');
    expect(TABLE_STRING_RESOURCE_KEYS).toHaveProperty('NO', 'no');
  });

  it('should not contain unexpected keys', () => {
    const allowedKeys = ['SEARCH_PLACEHOLDER', 'EDIT', 'YES', 'NO'];
    const actualKeys = Object.keys(TABLE_STRING_RESOURCE_KEYS);

    expect(actualKeys.every((key) => allowedKeys.includes(key))).toBe(true);
  });
});
