import { JSON } from './json';

describe('JSON.escapeSpecialChars', () => {
  it('should escape backslashes', () => {
    expect(JSON.escapeSpecialChars('Hello\\World')).toBe('Hello\\\\World');
  });

  it('should escape double quotes', () => {
    expect(JSON.escapeSpecialChars('Hello "World"')).toBe('Hello \\"World\\"');
  });

  it('should escape forward slashes', () => {
    expect(JSON.escapeSpecialChars('Hello / World')).toBe('Hello \\/ World');
  });

  it('should escape backspace characters', () => {
    expect(JSON.escapeSpecialChars('Hello\bWorld')).toBe('Hello\\bWorld');
  });

  it('should escape form feed characters', () => {
    expect(JSON.escapeSpecialChars('Hello\fWorld')).toBe('Hello\\fWorld');
  });

  it('should escape newline characters', () => {
    expect(JSON.escapeSpecialChars('Hello\nWorld')).toBe('Hello\\nWorld');
  });

  it('should escape carriage return characters', () => {
    expect(JSON.escapeSpecialChars('Hello\rWorld')).toBe('Hello\\rWorld');
  });

  it('should escape tab characters', () => {
    expect(JSON.escapeSpecialChars('Hello\tWorld')).toBe('Hello\\tWorld');
  });

  it('should return the same string if there are no special characters', () => {
    expect(JSON.escapeSpecialChars('Hello World')).toBe('Hello World');
  });

  it('should handle empty strings correctly', () => {
    expect(JSON.escapeSpecialChars('')).toBe('');
  });
});