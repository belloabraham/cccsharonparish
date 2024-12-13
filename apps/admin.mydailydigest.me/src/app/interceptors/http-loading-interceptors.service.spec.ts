import { TestBed } from '@angular/core/testing';

import { HttpLoadingRequestInterceptorsService } from './http-loading-interceptors.service';

describe('LoadingInterceptorsService', () => {
  let service: HttpLoadingRequestInterceptorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpLoadingRequestInterceptorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
