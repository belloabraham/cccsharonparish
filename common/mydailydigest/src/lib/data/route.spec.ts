import { ROUTE } from './route';

describe('ROUTE', () => {
  it('should have the correct route paths', () => {
    expect(ROUTE).toEqual({
      ROOT: '',
      VERIFY_EMAIL: 'verify-email',
      SIGN_UP: 'sign-up',
      DRAFT: 'draft',
      NEW: 'new',
      APPROVED: 'approved',
      AWAITING_APPROVAL: 'awaiting-approval',
      TRANSLATE: 'translate',
      PUBLISHED: 'published',
      YEARS: 'years',
      LIST: 'list',
      EDITORS: 'editors',
      PROFILE: 'profile',
      PRIVACY: 'privacy',
      TERMS: 'terms',
      PARAMS: {
        LANGUAGE_CODE: 'languageCode',
        CONTENT_YEAR: 'contentYear',
      },
    });
  });

  it('should contain specific route keys', () => {
    expect(ROUTE).toHaveProperty('ROOT', '');
    expect(ROUTE).toHaveProperty('VERIFY_EMAIL', 'verify-email');
    expect(ROUTE).toHaveProperty('SIGN_UP', 'sign-up');
    expect(ROUTE).toHaveProperty('DRAFT', 'draft');
    expect(ROUTE).toHaveProperty('NEW', 'new');
    expect(ROUTE).toHaveProperty('APPROVED', 'approved');
    expect(ROUTE).toHaveProperty('AWAITING_APPROVAL', 'awaiting-approval');
    expect(ROUTE).toHaveProperty('TRANSLATE', 'translate');
    expect(ROUTE).toHaveProperty('PUBLISHED', 'published');
    expect(ROUTE).toHaveProperty('YEARS', 'years');
    expect(ROUTE).toHaveProperty('LIST', 'list');
    expect(ROUTE).toHaveProperty('EDITORS', 'editors');
    expect(ROUTE).toHaveProperty('PROFILE', 'profile');
    expect(ROUTE).toHaveProperty('PRIVACY', 'privacy');
    expect(ROUTE).toHaveProperty('TERMS', 'terms');
    expect(ROUTE.PARAMS).toHaveProperty('LANGUAGE_CODE', 'languageCode');
    expect(ROUTE.PARAMS).toHaveProperty('CONTENT_YEAR', 'contentYear');
  });

  it('should not contain unexpected keys', () => {
    const allowedKeys = [
      'ROOT',
      'VERIFY_EMAIL',
      'SIGN_UP',
      'DRAFT',
      'NEW',
      'APPROVED',
      'AWAITING_APPROVAL',
      'TRANSLATE',
      'PUBLISHED',
      'YEARS',
      'LIST',
      'EDITORS',
      'PROFILE',
      'PRIVACY',
      'TERMS',
      'PARAMS',
    ];
    const actualKeys = Object.keys(ROUTE);
    expect(actualKeys.every((key) => allowedKeys.includes(key))).toBe(true);

    const allowedParamsKeys = ['LANGUAGE_CODE', 'CONTENT_YEAR'];
    const actualParamsKeys = Object.keys(ROUTE.PARAMS);
    expect(
      actualParamsKeys.every((key) => allowedParamsKeys.includes(key))
    ).toBe(true);
  });
});
