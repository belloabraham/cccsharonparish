import { TestBed } from '@angular/core/testing';

import { ProfileService } from './profile.service';
import { AUTH_TOKEN, CLOUD_STORAGE_TOKEN } from '../../services';
import { MockAuthService, MockFirebaseStorageService } from '../../testing';

describe('ProfileService', () => {
  let service: ProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: CLOUD_STORAGE_TOKEN, useClass: MockFirebaseStorageService },
        { provide: AUTH_TOKEN, useClass: MockAuthService },
      ],
    });
    service = TestBed.inject(ProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
