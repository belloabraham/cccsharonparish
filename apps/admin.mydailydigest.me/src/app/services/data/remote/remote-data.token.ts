import { InjectionToken } from '@angular/core';
import { IRemoteData } from './remote-data.interface';
import { FirestoreService } from './firebase/firestore.service';

export const REMOTE_DATA_TOKEN = new InjectionToken<IRemoteData>('remote-data', {
  providedIn: 'root',
  factory: () => new FirestoreService(),
});
