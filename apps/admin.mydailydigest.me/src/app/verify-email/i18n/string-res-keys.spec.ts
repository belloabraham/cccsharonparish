import { SHARED_STRING_RESOURCE_KEY } from "../../shared";
import { VERIFY_MAIL_STRING_RESOURCE_KEY } from "./string-res-keys";

describe('VERIFY_MAIL_STRING_RESOURCE_KEY', () => {

  it('should have the correct additional keys and values', () => {
    expect(VERIFY_MAIL_STRING_RESOURCE_KEY).toMatchObject({
      PAGE_TITLE: 'verify_email_title',
      VERIFY_EMAIL: 'verify_email',
      EMAIL_VERIFICATION_TITLE: 'email_verification_title',
    });
  });

  it('should not contain unexpected keys', () => {
    const allowedKeys = [
      ...Object.keys(SHARED_STRING_RESOURCE_KEY),
      'PAGE_TITLE',
      'VERIFY_EMAIL',
      'EMAIL_VERIFICATION_TITLE',
    ];
    const actualKeys = Object.keys(VERIFY_MAIL_STRING_RESOURCE_KEY);

    expect(actualKeys.every((key) => allowedKeys.includes(key))).toBe(true);
  });
});
