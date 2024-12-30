import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import parsePhoneNumber from 'libphonenumber-js';

export class CustomValidator {
  static requiredString(
    error: Record<string, string> = { error: 'Enter a valid value' }
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasWhitespace = (control.value || '').trim().length === 0;
      return hasWhitespace ? error : null;
    };
  }

  static validPhoneNumber(
    CountryCode: string,
    error: Record<string, string>
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return error;
      }

      if (!control.value) {
        return parsePhoneNumber('08026687216', {
          defaultCallingCode: '+234',
        })?.isValid
          ? null
          : error;
      }

      return null;
    };
  }
}
