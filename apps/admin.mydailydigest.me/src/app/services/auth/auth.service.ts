import { inject, Injectable, InjectionToken } from '@angular/core';
import { IAuth } from './auth.interface';
import { FirebaseAuthService } from './firebase/firebase-auth.service';
import { User, UserCredential } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export const AUTH_TOKEN = new InjectionToken<IAuth>('authentication', {
  providedIn: 'root',
  factory: () => new AuthService(new FirebaseAuthService()),
});

@Injectable()
export class AuthService implements IAuth {
  constructor(private readonly firebaseAuth: FirebaseAuthService) {}

  signInWithEmailLink(
    email: string,
    emailLink: string
  ): Observable<UserCredential> {
    if (!this.emailIsAuthorized(email)) {
      throw new Error('UnAuthorized email');
    }
    return this.firebaseAuth.signInWithEmailLink(email, emailLink);
  }

  getUser(): User | null {
    return this.firebaseAuth.getUser();
  }

  getUserId() {
    return this.firebaseAuth.getUser()?.uid || null;
  }

  updateCurrentUser(user: User) {
    return this.firebaseAuth.updateCurrentUser(user);
  }

  emailIsAuthorized(email: string) {
    return email.endsWith(environment.emailDomain);
  }

  signOut(): Observable<void> {
    return this.firebaseAuth.signOut();
  }

  getAuthSate$(): Observable<User | null> {
    return this.firebaseAuth.getAuthSate$();
  }

  sendSignInLinkTo(email: string): Observable<void> {
    return this.firebaseAuth.sendSignInLinkToEmail(email);
  }
}
