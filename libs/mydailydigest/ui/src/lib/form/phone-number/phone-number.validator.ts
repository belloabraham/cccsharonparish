import { Injectable } from '@angular/core';
import {
  parsePhoneNumber,
  isValidPhoneNumber,
  CountryCode,
  AsYouType,
  getCountryCallingCode,
  NumberFormat,
} from 'libphonenumber-js';
import { PhoneValidatorInterface } from './phone-number.interface';
import { LoggerUtil } from '@cccsharonparish.org/core';

export const DIALING_CODE_PREFIX = '+';

@Injectable()
export class PhoneNumberValidator implements PhoneValidatorInterface {
  isValidPhone(phoneNumber: string, countryCode: string): boolean {
    try {
      return isValidPhoneNumber(
        phoneNumber,
        countryCode.toUpperCase() as CountryCode
      );
    } catch (error) {
      LoggerUtil.error(PhoneNumberValidator, this.isValidPhone, error);
      return false;
    }
  }

  getE164Format(phoneNumber: string, countryCode: string): string {
    const e164Format: NumberFormat = 'E.164';
    const number = parsePhoneNumber(
      phoneNumber,
      countryCode.toUpperCase() as CountryCode
    );
    const formatE164 = number.format(e164Format);
    return formatE164;
  }

  getFormattedPhoneNumber(
    countryCode: string,
    unformattedPhoneNumber: string
  ): string {
    const formattedPhoneNumber = new AsYouType(
      countryCode.toUpperCase() as CountryCode
    ).input(unformattedPhoneNumber);
    return formattedPhoneNumber;
  }

  getDiallingCode(countryCode: string): string {
    return getCountryCallingCode(
      countryCode.toUpperCase() as CountryCode
    ).toString();
  }
}
