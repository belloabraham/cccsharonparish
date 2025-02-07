import { inject, Injectable } from '@angular/core';
import { AUTH_TOKEN, COLLECTION, REMOTE_DATA_TOKEN } from '../../services';
import { IUser, IUserUIState, UserType } from '@cccsharonparish/mydailydigest';
import { Timestamp } from '@angular/fire/firestore';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class UserDataService {
  private readonly remoteData = inject(REMOTE_DATA_TOKEN);
  private readonly auth = inject(AUTH_TOKEN);

  updateUser(userUIState: IUserUIState, userType: UserType = 'Editor') {
    return this.addUser(userUIState, false, userType);
  }
  createUser(userUIState: IUserUIState, userType: UserType = 'Editor') {
    return this.addUser(userUIState, true, userType);
  }

  private addUser(
    userUIState: IUserUIState,
    isNew: boolean,
    userType: UserType = 'Editor'
  ) {
    const authUser = this.auth.getUser()!;
    const user: IUser = {
      ...userUIState,
      email: authUser.email || userUIState.email,
      userType: userType,
      id: authUser.uid,
      updatedOn: Timestamp.now(),
    };

    if (isNew) {
      user.createdOn = new Date(
        authUser?.metadata?.creationTime || new Date().toISOString()
      );
    }
    return forkJoin({
      authUser: this.auth.updateProfile({
        displayName: `${userUIState.firstName}#${userUIState.lastName}`,
      }),
      userData: this.remoteData.addADocumentDataTo(
        COLLECTION.EDITORS,
        [user.id],
        user
      ),
    });
  }

  getUser(userId:string) {
    return this.remoteData.getADocumentData<IUser>(COLLECTION.EDITORS, [
      userId,
    ]);
  }
}
