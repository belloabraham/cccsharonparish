import { getDaysInMonth, TABLE_STRING_RESOURCE_KEYS } from './table';

describe('TABLE_STRING_RESOURCE_KEYS', () => {
  it('should have the correct keys and values', () => {
    expect(TABLE_STRING_RESOURCE_KEYS).toEqual({
      SEARCH_PLACEHOLDER: 'search_placeholder',
      EDIT: 'edit',
      YES: 'yes',
      NO: 'no',
    });
  });

  it('should contain specific keys', () => {
    expect(TABLE_STRING_RESOURCE_KEYS).toHaveProperty(
      'SEARCH_PLACEHOLDER',
      'search_placeholder'
    );
    expect(TABLE_STRING_RESOURCE_KEYS).toHaveProperty('EDIT', 'edit');
    expect(TABLE_STRING_RESOURCE_KEYS).toHaveProperty('YES', 'yes');
    expect(TABLE_STRING_RESOURCE_KEYS).toHaveProperty('NO', 'no');
  });

  it('should not contain unexpected keys', () => {
    const allowedKeys = ['SEARCH_PLACEHOLDER', 'EDIT', 'YES', 'NO'];
    const actualKeys = Object.keys(TABLE_STRING_RESOURCE_KEYS);

    expect(actualKeys.every((key) => allowedKeys.includes(key))).toBe(true);
  });
});

describe('getDaysInMonth', () => {
  it('should return correct number of days for each month in a non-leap year', () => {
    expect(getDaysInMonth(0, 2023)).toBe(31); // January
    expect(getDaysInMonth(1, 2023)).toBe(28); // February
    expect(getDaysInMonth(2, 2023)).toBe(31); // March
    expect(getDaysInMonth(3, 2023)).toBe(30); // April
    expect(getDaysInMonth(4, 2023)).toBe(31); // May
    expect(getDaysInMonth(5, 2023)).toBe(30); // June
    expect(getDaysInMonth(6, 2023)).toBe(31); // July
    expect(getDaysInMonth(7, 2023)).toBe(31); // August
    expect(getDaysInMonth(8, 2023)).toBe(30); // September
    expect(getDaysInMonth(9, 2023)).toBe(31); // October
    expect(getDaysInMonth(10, 2023)).toBe(30); // November
    expect(getDaysInMonth(11, 2023)).toBe(31); // December
  });

  it('should return 29 for February in a leap year', () => {
    expect(getDaysInMonth(1, 2024)).toBe(29);
  });

  it('should throw an error for invalid month values', () => {
    expect(() => getDaysInMonth(-1, 2023)).toThrow(
      'Invalid month. Month should be between 0 (January) and 11 (December).'
    );
    expect(() => getDaysInMonth(12, 2023)).toThrow(
      'Invalid month. Month should be between 0 (January) and 11 (December).'
    );
  });

  it('should use the current year if no year is provided', () => {
    const currentYear = new Date().getFullYear();
    expect(getDaysInMonth(0)).toBe(new Date(currentYear, 1, 0).getDate()); // January
    expect(getDaysInMonth(1)).toBe(new Date(currentYear, 2, 0).getDate()); // February
  });
});
