import { InjectionToken } from '@angular/core';
import { IRemoteData } from './remote-data.interface';

export const REMOTE_DATA_TOKEN = new InjectionToken<IRemoteData>('remote-data');
