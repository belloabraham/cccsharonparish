import { TestBed } from '@angular/core/testing';

import { ContentService } from './content.service';
import { AUTH_TOKEN, CLOUD_STORAGE_TOKEN, REMOTE_DATA_TOKEN } from '../../services';
import { MockAuthService, MockFirebaseStorageService, MockFirestoreService } from '../../testing';

describe('ContentService', () => {
  let service: ContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: REMOTE_DATA_TOKEN, useClass: MockFirestoreService },
        { provide: AUTH_TOKEN, useClass: MockAuthService },
        { provide: CLOUD_STORAGE_TOKEN, useClass: MockFirebaseStorageService },
      ],
    });
    service = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
