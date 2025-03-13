import { APP_STRING_RESOURCE_KEY } from "./app-string-res-keys";

describe('APP_STRING_RESOURCE_KEY', () => {
  it('should contain the correct key and value', () => {
    expect(APP_STRING_RESOURCE_KEY).toEqual({
      NO_INTERNET_CONNECTION_NOTICE: 'no_internet_connection_notice',
    });
  });

  it('should contain specific keys', () => {
    expect(APP_STRING_RESOURCE_KEY).toHaveProperty(
      'NO_INTERNET_CONNECTION_NOTICE',
      'no_internet_connection_notice'
    );
  });

  it('should not contain unexpected keys', () => {
    const allowedKeys = ['NO_INTERNET_CONNECTION_NOTICE'];
    const actualKeys = Object.keys(APP_STRING_RESOURCE_KEY);
    expect(actualKeys.every((key) => allowedKeys.includes(key))).toBe(true);
  });
});
