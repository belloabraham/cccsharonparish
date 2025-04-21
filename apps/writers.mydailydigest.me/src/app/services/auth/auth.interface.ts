import { User, UserCredential } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AuthUserProfile } from './firebase/firebase-auth.service';

export interface IAuth {
  getAuthSate$: () => Observable<User | null>;
  signOut: () => Observable<void>;
  getUser: () => User | null;
  getUserId(): string | null;
  emailIsAuthorized: (email: string) => boolean;
  sendSignInLinkTo: (email: string) => Observable<void>;
  signInWithEmailLink: (
    email: string,
    emailLink: string
  ) => Observable<UserCredential>;
  updateProfile: (profile: AuthUserProfile) => Observable<AuthUserProfile>;
}
