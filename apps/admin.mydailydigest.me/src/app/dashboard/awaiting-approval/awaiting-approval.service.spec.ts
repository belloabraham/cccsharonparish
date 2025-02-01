import { TestBed } from '@angular/core/testing';

import { AwaitingApprovalService } from './awaiting-approval.service';

describe('AwaitingApprovalService', () => {
  let service: AwaitingApprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwaitingApprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
