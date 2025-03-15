import { TestBed } from '@angular/core/testing';

import { CloudStorageService } from './cloud-storage.service';
import { FirebaseStorageService } from './firebase/firebase-storage.service';
import { MockFirebaseStorageService } from '../../testing';

describe('CloudStorageService', () => {
  let service: CloudStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CloudStorageService,
        {
          provide: FirebaseStorageService,
          useClass: MockFirebaseStorageService,
        },
      ],
    });
    service = TestBed.inject(CloudStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
