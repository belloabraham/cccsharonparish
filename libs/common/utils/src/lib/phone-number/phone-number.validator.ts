import { Injectable } from '@angular/core';
import {
  parsePhoneNumber,
  isValidPhoneNumber,
  CountryCode,
  AsYouType,
  getCountryCallingCode,
} from 'libphonenumber-js';
import { PhoneValidatorInterface } from './phone-number.interface';
import { LoggerUtil } from '../logger';

export const DIALING_CODE_PREFIX = "+"

@Injectable()
export class PhoneNumberValidator implements PhoneValidatorInterface {
  isValidPhone(
    phoneNumber: string,
    countryCode: string,
    diallingCode: string
  ): boolean {
    try {
      const number = parsePhoneNumber(`${diallingCode}${phoneNumber}`);
      const internationalNumberFormat = number.formatInternational();
      return isValidPhoneNumber(
        internationalNumberFormat,
        countryCode.toUpperCase() as CountryCode
      );
    } catch (error) {
      LoggerUtil.error(PhoneNumberValidator, this.isValidPhone, error);
      return false;
    }
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
