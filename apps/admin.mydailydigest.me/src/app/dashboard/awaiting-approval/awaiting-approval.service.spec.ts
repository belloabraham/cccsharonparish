import { TestBed } from '@angular/core/testing';

import { AwaitingApprovalService } from './awaiting-approval.service';
import { AUTH_TOKEN, REMOTE_DATA_TOKEN } from '../../services';
import { MockAuthService, MockFirestoreService } from '../../testing';

describe('AwaitingApprovalService', () => {
  let service: AwaitingApprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AUTH_TOKEN, useClass: MockAuthService },
        { provide: REMOTE_DATA_TOKEN, useClass: MockFirestoreService },
      ],
    });
    service = TestBed.inject(AwaitingApprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
