import { inject, Injectable } from '@angular/core';
import { AUTH_TOKEN, COLLECTION, REMOTE_DATA_TOKEN } from '../../services';
import { IUser } from '@cccsharonparish/mydailydigest';
import {
  Firestore,
  collection,
  query,
  where,
  getDocs,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class EditorsService {
  private readonly remoteData = inject(REMOTE_DATA_TOKEN);
  private readonly auth = inject(AUTH_TOKEN);

  getEditors() {
    return this.remoteData.getListOfDocumentDataWithQueryAsync<IUser>(
      COLLECTION.EDITORS,
      [],
      [where('userType', '!=', 'Admin')]
    );
  }
}
