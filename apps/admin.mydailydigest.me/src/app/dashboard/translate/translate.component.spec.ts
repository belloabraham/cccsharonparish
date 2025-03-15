import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateComponent } from './translate.component';
import { getTranslocoTestingModule, MockAuthService, MockFirebaseStorageService, MockFirestoreService } from '../../testing';
import { AUTH_TOKEN, CLOUD_STORAGE_TOKEN, REMOTE_DATA_TOKEN } from '../../services';

describe('TranslateComponent', () => {
  let component: TranslateComponent;
  let fixture: ComponentFixture<TranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateComponent, getTranslocoTestingModule()],
      providers: [
        { provide: REMOTE_DATA_TOKEN, useClass: MockFirestoreService },
        { provide: AUTH_TOKEN, useClass: MockAuthService },
        { provide: CLOUD_STORAGE_TOKEN, useClass: MockFirebaseStorageService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
