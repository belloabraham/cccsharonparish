import { TestBed } from '@angular/core/testing';

import { FirestoreService } from './firestore.service';
import { MockFirestoreService } from 'apps/admin.mydailydigest.me/src/app/testing';

describe('FirestoreService', () => {
  let service: FirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: FirestoreService,
          useClass: MockFirestoreService,
        },
      ],
    });
    service = TestBed.inject(FirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
