import { User, UserCredential } from '@angular/fire/auth';
import { Observable } from 'rxjs';

export interface IAuth {
  getAuthSate$: () => Observable<User | null>;
  signOut: () => Observable<void>;
  getUser: () => User | null;
  emailIsAuthorized: (email: string) => boolean;
  sendSignInLinkTo: (email: string) => Observable<void>;
  signInWithEmailLink: (
    email: string,
    emailLink: string
  ) => Observable<UserCredential>;
  updateCurrentUser: (user: User) => Observable<User>;
}
