import { TestBed } from '@angular/core/testing';

import { UserDataService } from './user-data.service';
import { AUTH_TOKEN, REMOTE_DATA_TOKEN } from '../../services';
import { MockAuthService, MockFirestoreService } from '../../testing';

describe('UserDateService', () => {
  let service: UserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: REMOTE_DATA_TOKEN, useClass: MockFirestoreService },
        { provide: AUTH_TOKEN, useClass: MockAuthService },
      ],
    });
    service = TestBed.inject(UserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
