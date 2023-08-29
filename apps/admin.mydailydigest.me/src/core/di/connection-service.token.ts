import { InjectionToken } from '@angular/core';
import { Providers } from '@cccsharonparish.org/angular';
import {
  ConnectionUtil,
  IConnectionUtil,
} from '@cccsharonparish.org/common/utils';

export const CONNECTION_UTIL_TOKEN = new InjectionToken<IConnectionUtil>(
  'connection-util',
  {
    providedIn: Providers.ROOT,
    factory: () => new ConnectionUtil(),
  }
);
