import { TestBed } from '@angular/core/testing';

import { PublishedContentService } from './published-content.service';

describe('PublishedContentService', () => {
  let service: PublishedContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublishedContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
