import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import parsePhoneNumber from 'libphonenumber-js';

export class CustomValidators {
  static requiredString(
    error: Record<string, string> = { error: 'Enter a valid value' }
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasWhitespace = (control.value || '').trim().length === 0;
      return hasWhitespace ? error : null;
    };
  }

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

  static maxFileSize(
    maxSizeInBytes: number,
    error: Record<string, string> = { error: 'Enter a valid value' }
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const file = control.value instanceof File ? control.value : null;

      if (file && file.size > maxSizeInBytes) {
        return error;
      }
      return null;
    };
  }
}
