import { REGEX } from './regex';

describe('REGEX', () => {
  describe('EMAIL', () => {
    const emailRegex = new RegExp(REGEX.EMAIL);

    it('should validate correct email addresses', () => {
      expect(emailRegex.test('test@example.com')).toBe(true);
      expect(emailRegex.test('user.name@domain.co')).toBe(true);
      expect(emailRegex.test('email123@sub.domain.net')).toBe(true);
    });

    it('should invalidate incorrect email addresses', () => {
      expect(emailRegex.test('plainaddress')).toBe(false);
      expect(emailRegex.test('@missingusername.com')).toBe(false);
      expect(emailRegex.test('username@.com')).toBe(false);
      expect(emailRegex.test('username@com')).toBe(false);
      expect(emailRegex.test('user@domain..com')).toBe(false);
    });
  });

  describe('BIBLE_REFERENCE', () => {
    it('should validate correct Bible references', () => {
      expect(REGEX.BIBLE_REFERENCE.test('John 3:16')).toBe(true);
      expect(REGEX.BIBLE_REFERENCE.test('Genesis 1')).toBe(true);
      expect(REGEX.BIBLE_REFERENCE.test('1 Kings 2:10')).toBe(true);
      expect(REGEX.BIBLE_REFERENCE.test('Psalm 23:1-6')).toBe(true);
      expect(REGEX.BIBLE_REFERENCE.test('Revelation 22')).toBe(true);
    });

    it('should invalidate incorrect Bible references', () => {
      expect(REGEX.BIBLE_REFERENCE.test('123 John')).toBe(false);
      expect(REGEX.BIBLE_REFERENCE.test('Genesis')).toBe(false);
      expect(REGEX.BIBLE_REFERENCE.test('Psalm:23')).toBe(false);
      expect(REGEX.BIBLE_REFERENCE.test('3John 1:2')).toBe(false);
      expect(REGEX.BIBLE_REFERENCE.test('Exodus-20')).toBe(false);
    });
  });
});
