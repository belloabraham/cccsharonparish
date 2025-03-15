import { TestBed } from '@angular/core/testing';

import { TranslateService } from './translate.service';
import { REMOTE_DATA_TOKEN } from '../../services';
import { MockFirestoreService } from '../../testing';

describe('TranslateService', () => {
  let service: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: REMOTE_DATA_TOKEN, useClass: MockFirestoreService },
      ],
    });
    service = TestBed.inject(TranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
