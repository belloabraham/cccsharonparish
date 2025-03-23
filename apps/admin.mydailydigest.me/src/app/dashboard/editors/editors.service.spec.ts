import { TestBed } from '@angular/core/testing';

import { EditorsService } from './editors.service';
import { REMOTE_DATA_TOKEN } from '../../services';
import { MockFirestoreService } from '../../test';

describe('EditorsService', () => {
  let service: EditorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: REMOTE_DATA_TOKEN, useClass: MockFirestoreService },
      ],
    });
    service = TestBed.inject(EditorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
