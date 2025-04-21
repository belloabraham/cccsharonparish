import { TestBed } from '@angular/core/testing';

import { ApprovedService } from './approved.service';
import { REMOTE_DATA_TOKEN } from '../../services';
import { MockFirestoreService } from '../../test';

describe('ApprovedService', () => {
  let service: ApprovedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: REMOTE_DATA_TOKEN, useClass: MockFirestoreService },
      ],
    });
    service = TestBed.inject(ApprovedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
