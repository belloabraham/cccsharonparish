import { SHARED_STRING_RESOURCE_KEY } from '../../shared';
import { AUTH_STRING_RESOURCE_KEY } from './string-res-keys';

describe('AUTH_STRING_RESOURCE_KEY', () => {
  it('should have the correct additional keys and values', () => {
    expect(AUTH_STRING_RESOURCE_KEY).toMatchObject({
      PAGE_TITLE: 'auth_title',
      LOGIN: 'login',
      AUTH_LOGIN_MGS: 'authorized_login_msg',
      LOGIN_LINK_SENT_TITLE: 'login_link_sent_title',
      LOGIN_LINK_SENT_MSG: 'login_link_sent_msg',
      UNAUTHORIZED_LOGIN_ERROR_MSG: 'unauthorized_login_error_msg',
    });
  });

  it('should not contain unexpected keys', () => {
    const allowedKeys = [
      ...Object.keys(SHARED_STRING_RESOURCE_KEY),
      'PAGE_TITLE',
      'LOGIN',
      'AUTH_LOGIN_MGS',
      'LOGIN_LINK_SENT_TITLE',
      'LOGIN_LINK_SENT_MSG',
      'UNAUTHORIZED_LOGIN_ERROR_MSG',
    ];
    const actualKeys = Object.keys(AUTH_STRING_RESOURCE_KEY);

    expect(actualKeys.every((key) => allowedKeys.includes(key))).toBe(true);
  });
});
