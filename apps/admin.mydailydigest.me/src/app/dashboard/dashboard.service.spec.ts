import { TestBed } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';
import { AUTH_TOKEN, REMOTE_DATA_TOKEN } from '../services';
import { MockAuthService, MockFirestoreService, MockLanguageResourceService } from '../testing';
import { LanguageResourceService } from '@cccsharonparish/angular';

describe('DashboardService', () => {
  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DashboardService,
        { provide: AUTH_TOKEN, useClass: MockAuthService },
        { provide: REMOTE_DATA_TOKEN, useClass: MockFirestoreService },

        {
          provide: LanguageResourceService,
          useClass: MockLanguageResourceService,
        },
      ],
    });
    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
