import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { Inject } from '@angular/core';
import { PHONE_NUMBER_VALIDATOR_TOKEN, PhoneValidatorInterface } from '@cccsharonparish.org/common/utils';
import { PhoneNumberValueInterface } from './phone-number-value.interface';

export class PhoneNgValidator implements Validator {
  constructor(
    @Inject(PHONE_NUMBER_VALIDATOR_TOKEN)
    private baseValidator: PhoneValidatorInterface
  ) {}

  validate(
    control: AbstractControl<PhoneNumberValueInterface, any>
  ): ValidationErrors | null {
    const requiredError = { required: true };

    //If no value was set for the form control
    if (!control.value) {
      return requiredError;
    }

    //If phone number is null or undefined
    if (!control?.value.phoneNumber) {
      return requiredError;
    }

    //If country code is null or undefined
    if (!control?.value.countryCode) {
      return requiredError;
    }

    const phoneCode = this.baseValidator.getDiallingCode(
      control.value.countryCode
    );
    const phoneCodePrefix = '+';
    const phoneNumberIsNotValid = !this.baseValidator.isValidPhone(
      control.value.phoneNumber,
      control.value.countryCode,
      `${phoneCodePrefix}${phoneCode}`
    );

    if (phoneNumberIsNotValid) {
      return {
        invalidPhone: true,
      };
    }

    return null;
  }
}
