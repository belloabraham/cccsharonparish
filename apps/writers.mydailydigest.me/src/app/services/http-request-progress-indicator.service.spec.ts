
import { TestBed } from '@angular/core/testing';

import { HttpRequestProgressIndicatorService } from './http-request-progress-indicator.service';

describe('HttpRequestLoadingService', () => {
  let service: HttpRequestProgressIndicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRequestProgressIndicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
