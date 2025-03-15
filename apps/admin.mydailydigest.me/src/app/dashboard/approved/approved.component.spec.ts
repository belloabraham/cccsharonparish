import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedComponent } from './approved.component';
import { AUTH_TOKEN, CLOUD_STORAGE_TOKEN, REMOTE_DATA_TOKEN } from '../../services';
import { getTranslocoTestingModule, MockAuthService, MockFirebaseStorageService, MockFirestoreService } from '../../testing';

describe('ApprovedComponent', () => {
  let component: ApprovedComponent;
  let fixture: ComponentFixture<ApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovedComponent, getTranslocoTestingModule()],
      providers: [
        { provide: REMOTE_DATA_TOKEN, useClass: MockFirestoreService },
        { provide: AUTH_TOKEN, useClass: MockAuthService },
        { provide: CLOUD_STORAGE_TOKEN, useClass: MockFirebaseStorageService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
