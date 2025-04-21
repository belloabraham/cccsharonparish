import { SHARED_STRING_RESOURCE_KEY } from './string-res-keys';

describe('SHARED_STRING_RESOURCE_KEY', () => {
  it('should have the correct keys and values', () => {
    expect(SHARED_STRING_RESOURCE_KEY).toEqual({
      OK: 'ok',
      INVALID_EMAIL_MGS: 'invalid_email_msg',
      LOGIN_ERROR_TITLE: 'login_error_title',
      EMAIL: 'email',
      OPTIONAL: 'optional',
    });
  });

  it('should contain specific keys', () => {
    expect(SHARED_STRING_RESOURCE_KEY).toHaveProperty('OK', 'ok');
    expect(SHARED_STRING_RESOURCE_KEY).toHaveProperty(
      'INVALID_EMAIL_MGS',
      'invalid_email_msg'
    );
    expect(SHARED_STRING_RESOURCE_KEY).toHaveProperty(
      'LOGIN_ERROR_TITLE',
      'login_error_title'
    );
    expect(SHARED_STRING_RESOURCE_KEY).toHaveProperty('EMAIL', 'email');
    expect(SHARED_STRING_RESOURCE_KEY).toHaveProperty('OPTIONAL', 'optional');
  });

  it('should not contain unexpected keys', () => {
    const allowedKeys = [
      'OK',
      'INVALID_EMAIL_MGS',
      'LOGIN_ERROR_TITLE',
      'EMAIL',
      'OPTIONAL',
    ];
    const actualKeys = Object.keys(SHARED_STRING_RESOURCE_KEY);

    expect(actualKeys.every((key) => allowedKeys.includes(key))).toBe(true);
  });
});
