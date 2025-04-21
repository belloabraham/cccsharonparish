import { TestBed } from '@angular/core/testing';

import { PublishedContentService } from './published-content.service';
import { REMOTE_DATA_TOKEN } from '../../services';
import { MockFirestoreService } from '../../test';

describe('PublishedContentService', () => {
  let service: PublishedContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: REMOTE_DATA_TOKEN, useClass: MockFirestoreService },
      ],
    });
    service = TestBed.inject(PublishedContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
