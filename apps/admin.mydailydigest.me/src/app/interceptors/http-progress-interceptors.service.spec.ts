import { TestBed } from '@angular/core/testing';

import { HttpProgressInterceptorService } from './http-progress-interceptors.service';

describe('LoadingInterceptorsService', () => {
  let service: HttpProgressInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HttpProgressInterceptorService]
    });
    service = TestBed.inject(HttpProgressInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
