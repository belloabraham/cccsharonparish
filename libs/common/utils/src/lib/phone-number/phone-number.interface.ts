export interface PhoneValidatorInterface {
  /**
   * Validates a phone number for a given country.
   *
   * @param phoneNumber - The phone number to validate.
   * @param countryCode - The two-letter country code (e.g., 'US' for United States).
   * @param phoneCode - The dialing code for the country (e.g., '+1' for the United States).
   * @returns `true` if the phone number is valid for the specified country; otherwise, `false`.
   * @throws Error if the `twoLetterCountryCode` is not a two-letter code.
   */
  isValidPhone: (
    phoneNumber: string,
    countryCode: string,
    diallingCode: string
  ) => boolean;

  /**
   * Formats an unformatted phone number based on the provided country code.
   *
   * @param countryCode - The two-letter country code (ISO 3166-1 alpha-2).
   * @param unformattedPhoneNumber - The unformatted phone number to format.
   * @returns The formatted phone number.
   */
  getFormattedPhoneNumber: (
    countryCode: string,
    unformattedPhoneNumber: string
  ) => string;

  /**
   * Retrieves the phone code for a given country code.
   *
   * @param countryCode - The two-letter country code (ISO 3166-1 alpha-2).
   * @returns The phone code for the country as a string.
   * @example
   * const diallingCodeForUS = phoneValidator.getDiallingCode(countryCode);
   * console.log(`Phone code for US: ${diallingCodeForUS}`); // Output: Phone code for US: 1
   */
  getDiallingCode: (countryCode: string) => string;
}
