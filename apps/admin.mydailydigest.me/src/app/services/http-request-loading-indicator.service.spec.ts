import { TestBed } from '@angular/core/testing';

import { HttpRequestLoadingService } from './http-request-loading-indicator.service';

describe('HttpRequestLoadingService', () => {
  let service: HttpRequestLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRequestLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
