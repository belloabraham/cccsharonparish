import { DASHBOARD_STRING_RESOURCE_KEY } from './string-res-keys';

describe('DASHBOARD_STRING_RESOURCE_KEY', () => {
  it('should have the correct keys and values', () => {
    expect(DASHBOARD_STRING_RESOURCE_KEY).toEqual({
      PAGE_TITLE: 'dashboard_title',
      SETTINGS: 'settings',
      DRAFT: 'draft',
      ADD_NEW: 'add_new',
      EDITORS: 'editors',
      EXPAND: 'expand',
      COLLAPSE: 'collapse',
      PUBLISHED: 'published',
      LIGHT: 'light',
      DARK: 'dark',
      DEVICE: 'device',
      PROFILE: 'profile',
      LOGOUT: 'logout',
      DASHBOARD: 'dashboard',
      TRANSLATE: 'translate',
      APPROVED: 'approved',
      AWAITING_APPROVAL: 'awaiting_approval',
    });
  });

  it('should not contain unexpected keys', () => {
    const allowedKeys = Object.keys(DASHBOARD_STRING_RESOURCE_KEY);
    const actualKeys = Object.keys(DASHBOARD_STRING_RESOURCE_KEY);

    expect(actualKeys.every((key) => allowedKeys.includes(key))).toBe(true);
  });
});
