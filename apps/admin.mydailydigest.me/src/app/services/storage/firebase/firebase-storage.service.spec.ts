import { TestBed } from '@angular/core/testing';

import { FirebaseStorageService } from './firebase-storage.service';
import { MockFirebaseStorageService } from '../../../testing';

describe('FirebaseStorageService', () => {
  let service: FirebaseStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: FirebaseStorageService,
          useClass: MockFirebaseStorageService,
        },
      ],
    });
    service = TestBed.inject(FirebaseStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
