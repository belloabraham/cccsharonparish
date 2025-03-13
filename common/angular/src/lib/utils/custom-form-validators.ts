import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import parsePhoneNumber from 'libphonenumber-js';

/**
 * CustomValidators provides a set of custom validation functions for Angular forms.
 */
export class CustomValidators {
  /**
   * Validates that a string input is not empty or only whitespace.
   * @param error - The validation error message to return if the validation fails.
   * @returns A ValidatorFn that checks if the input string contains non-whitespace characters.
   */
  static requiredString(
    error: Record<string, string> = { error: 'Enter a valid value' }
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasWhitespace = (control.value || '').trim().length === 0;
      return hasWhitespace ? error : null;
    };
  }

  /**
   * Validates whether a given phone number is valid.
   * @param error - The validation error message to return if the validation fails.
   * @returns A ValidatorFn that checks if the input is a valid phone number.
   */
  static validPhoneNumber(error: Record<string, string>): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return error;
      }

      if (value) {
        const number = parsePhoneNumber(value);
        return number?.isValid ? null : error;
      }

      return null;
    };
  }

  /**
   * Validates that a selected file does not exceed a maximum allowed size.
   * @param maxSizeInBytes - The maximum allowed file size in bytes.
   * @param error - The validation error message to return if the validation fails.
   * @returns A ValidatorFn that checks if the file size is within the allowed limit.
   */
  static maxFileSize(
    maxSizeInBytes: number,
    error: Record<string, string> = { error: 'Enter a valid value' }
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const file = control.value instanceof File ? control.value : null;

      const exceededMaxFileSize = file && file.size > maxSizeInBytes;
      if (exceededMaxFileSize) {
        return error;
      }
      return null;
    };
  }
}
