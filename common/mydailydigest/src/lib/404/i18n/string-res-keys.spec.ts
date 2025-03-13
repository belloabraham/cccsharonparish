import { STRING_RESOURCE_KEY } from "./string-res-keys";

describe('STRING_RESOURCE_KEY', () => {
  it('should have the correct keys and values', () => {
    expect(STRING_RESOURCE_KEY).toEqual({
      PAGE_TITLE: 'page_not_found_title',
      PAGE_NOT_FOUND_MESSAGE: 'page_not_found_message',
      GO_HOME: 'go_home',
      LOGO: 'logo',
    });
  });

  it('should contain specific keys', () => {
    expect(STRING_RESOURCE_KEY).toHaveProperty(
      'PAGE_TITLE',
      'page_not_found_title'
    );
    expect(STRING_RESOURCE_KEY).toHaveProperty(
      'PAGE_NOT_FOUND_MESSAGE',
      'page_not_found_message'
    );
    expect(STRING_RESOURCE_KEY).toHaveProperty('GO_HOME', 'go_home');
    expect(STRING_RESOURCE_KEY).toHaveProperty('LOGO', 'logo');
  });

  it('should not contain unexpected keys', () => {
    const allowedKeys = [
      'PAGE_TITLE',
      'PAGE_NOT_FOUND_MESSAGE',
      'GO_HOME',
      'LOGO',
    ];
    const actualKeys = Object.keys(STRING_RESOURCE_KEY);

    expect(actualKeys.every((key) => allowedKeys.includes(key))).toBe(true);
  });
});
