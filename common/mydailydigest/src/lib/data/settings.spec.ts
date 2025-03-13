import { Settings } from "./settings";

describe('Settings', () => {
  describe('themeKey', () => {
    it('should return the correct theme key for a given domain', () => {
      expect(Settings.themeKey('example')).toBe('example-theme');
      expect(Settings.themeKey('mydomain')).toBe('mydomain-theme');
      expect(Settings.themeKey('test-site')).toBe('test-site-theme');
    });
  });

  describe('loginEmailKey', () => {
    it('should return the correct login email key for a given domain', () => {
      expect(Settings.loginEmailKey('example')).toBe('example-login-email');
      expect(Settings.loginEmailKey('mydomain')).toBe('mydomain-login-email');
      expect(Settings.loginEmailKey('test-site')).toBe('test-site-login-email');
    });
  });
});
