import {
  AbstractControl,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
import { Inject } from '@angular/core';
import {
  PHONE_NUMBER_VALIDATOR_TOKEN,
  PhoneValidatorInterface,
} from '@cccsharonparish.org/common/utils';
import { PhoneNumberValueInterface } from './phone-number-value.interface';

export class PhoneNgValidator implements Validator {
  constructor(
    @Inject(PHONE_NUMBER_VALIDATOR_TOKEN)
    private baseValidator: PhoneValidatorInterface
  ) {}

  validate(
    control: AbstractControl<PhoneNumberValueInterface, any>
  ): ValidationErrors | null {
    const phoneNumberIsRequired = control.hasValidator(Validators.required);
    const requiredError = { required: true };

    /**
     * If phone number and country code was not entered by the user and the form value is required
     * because a required validator is set for the phone input's FormControl
     */
    if (
      (!control.value ||
        !control?.value.phoneNumber ||
        !control?.value.countryCode) &&
      phoneNumberIsRequired
    ) {
      return requiredError;
    }

    /**
     * Check for phone number validation if both phone number and country code exist(Meaning the user typed a phone number)
     * irrespective of if phone number input value from the user is required or not
     */
    if (control?.value.countryCode && control?.value.phoneNumber) {
      const phoneNumberIsNotValid = !this.baseValidator.isValidPhone(
        control.value.phoneNumber,
        control.value.countryCode,
      );
      if (phoneNumberIsNotValid) {
        return {
          invalidPhone: true,
        };
      }
    }

    return null;
  }
}
