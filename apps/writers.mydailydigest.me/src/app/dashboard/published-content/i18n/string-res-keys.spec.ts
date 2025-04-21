import { PUBLISHED_CONTENT_STRING_RESOURCE_KEY } from './string-res-keys';

describe('PUBLISHED_CONTENT_STRING_RESOURCE_KEY', () => {
  it('should have the correct keys and values', () => {
    expect(PUBLISHED_CONTENT_STRING_RESOURCE_KEY).toEqual({
      YEARS: 'years',
      YEAR: 'year',
    });
  });

  it('should contain specific keys', () => {
    expect(PUBLISHED_CONTENT_STRING_RESOURCE_KEY).toHaveProperty(
      'YEARS',
      'years'
    );
    expect(PUBLISHED_CONTENT_STRING_RESOURCE_KEY).toHaveProperty(
      'YEAR',
      'year'
    );
  });

  it('should not contain unexpected keys', () => {
    const allowedKeys = ['YEARS', 'YEAR'];
    const actualKeys = Object.keys(PUBLISHED_CONTENT_STRING_RESOURCE_KEY);

    expect(actualKeys.every((key) => allowedKeys.includes(key))).toBe(true);
  });
});
