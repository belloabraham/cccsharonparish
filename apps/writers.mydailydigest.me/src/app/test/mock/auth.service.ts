import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UserCredential } from '@angular/fire/auth';
import { AuthUserProfile, IAuth } from '../../services';

@Injectable()
export class MockAuthService implements IAuth {
  private mockUser: User | null = {
    uid: 'mock-uid',
    email: 'mock@example.com',
    displayName: 'Mock User' ,
    photoURL: '',
    phoneNumber: '',
    providerId: '',
    emailVerified: true,
    metadata: {} as any,
    refreshToken: '',
    isAnonymous: false,
    providerData: [],
    tenantId: null,
    delete: () => Promise.resolve(),
    getIdToken: () => Promise.resolve('mock-token'),
    getIdTokenResult: () => Promise.resolve({} as any),
    reload: () => Promise.resolve(),
    toJSON: () => ({}),
  };

  signInWithEmailLink(
    email: string,
    emailLink: string
  ): Observable<UserCredential> {
    if (!this.emailIsAuthorized(email)) {
      throw new Error('UnAuthorized email');
    }
    return of({ user: this.mockUser } as UserCredential);
  }

  getUser(): User | null {
    return this.mockUser;
  }

  getUserId(): string | null {
    return this.mockUser?.uid || null;
  }

  updateProfile(profile: AuthUserProfile): Observable<AuthUserProfile> {
    return of(profile);
  }

  emailIsAuthorized(email: string): boolean {
    return email.endsWith('@mockdomain.com'); // Replace with your test domain if needed
  }

  signOut(): Observable<void> {
    this.mockUser = null;
    return of();
  }

  getAuthSate$(): Observable<User | null> {
    return of(this.mockUser);
  }

  sendSignInLinkTo(email: string): Observable<void> {
    return of();
  }
}
