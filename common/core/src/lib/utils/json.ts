export class JSON {
  /**
   * Escapes special characters in a given string.
   * Ensures that newline, quotes, and other special characters are properly escaped.
   *
   * @param value - The input string to be escaped.
   * @returns The escaped string with special characters properly encoded.
   */
  static escapeSpecialChars(value: string) {
    return value.replace(/[\\"\/\b\f\n\r\t]/g, function (char) {
      switch (char) {
        case '\\':
          return '\\\\';
        case '"':
          return '\\"';
        case '/':
          return '\\/';
        case '\b':
          return '\\b';
        case '\f':
          return '\\f';
        case '\n':
          return '\\n';
        case '\r':
          return '\\r';
        case '\t':
          return '\\t';
        default:
          return char;
      }
    });
  }
}
