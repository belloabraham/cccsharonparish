import { InjectionToken } from '@angular/core';
import { Providers } from '@cccsharonparish.org/angular';
import { PhoneValidatorInterface } from './phone-number.interface';
import { PhoneNumberValidator } from './phone-number.validator';

export const PHONE_NUMBER_VALIDATOR_TOKEN =
  new InjectionToken<PhoneValidatorInterface>('phone-number-validator-token', {
    providedIn: Providers.ANY,
    factory: () => new PhoneNumberValidator(),
  });
