import { TestBed } from '@angular/core/testing';

import { DraftService } from './draft.service';
import { AUTH_TOKEN, CLOUD_STORAGE_TOKEN, REMOTE_DATA_TOKEN } from '../../services';
import { MockAuthService, MockFirebaseStorageService, MockFirestoreService } from '../../testing';

describe('DraftService', () => {
  let service: DraftService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: REMOTE_DATA_TOKEN, useClass: MockFirestoreService },
        { provide: AUTH_TOKEN, useClass: MockAuthService },
        { provide: CLOUD_STORAGE_TOKEN, useClass: MockFirebaseStorageService },
      ],
    });
    service = TestBed.inject(DraftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
