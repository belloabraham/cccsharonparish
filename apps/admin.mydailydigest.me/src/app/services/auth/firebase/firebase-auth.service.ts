import { inject, Injectable, Optional } from '@angular/core';
import {
  Auth,
  User,
  UserCredential,
  authState,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signOut,
  updateCurrentUser,
} from '@angular/fire/auth';
import { environment as env } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { ROUTE } from '@cccsharonparish/mydailydigest';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  @Optional() private auth = inject(Auth);

  isSignInWithEmailLink(emailLink: string): boolean {
    return isSignInWithEmailLink(this.auth, emailLink);
  }

  signOut(): Observable<void> {
    return new Observable((observer) => {
      signOut(this.auth)
        .then(() => observer.next())
        .catch((error) => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  getUser(): User | null {
    return this.auth.currentUser;
  }

  updateCurrentUser(user: User): Observable<User> {
    return new Observable((observer) => {
      updateCurrentUser(this.auth, user)
        .then(() => observer.next(user))
        .catch((error) => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  getAuthSate$() {
    return authState(this.auth);
  }

  signInWithEmailLink(
    email: string,
    emailLink: string
  ): Observable<UserCredential> {
    return new Observable((observer) => {
      signInWithEmailLink(this.auth, email, emailLink)
        .then((userCredential) => observer.next(userCredential))
        .catch((error) => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  sendSignInLinkToEmail(email: string): Observable<void> {
    const actionCodeSettings = {
      url: `${env.protocol}${env.domain}/${ROUTE.VERIFY_EMAIL}`,
      handleCodeInApp: true,
    };
    return new Observable((observer) => {
      sendSignInLinkToEmail(this.auth, email, actionCodeSettings)
        .then(() => observer.next())
        .catch((error) => observer.error(error))
        .finally(() => observer.complete());
    });
  }
}
