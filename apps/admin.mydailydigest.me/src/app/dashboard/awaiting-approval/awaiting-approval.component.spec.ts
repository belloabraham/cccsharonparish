import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaitingApprovalComponent } from './awaiting-approval.component';
import { AUTH_TOKEN, CLOUD_STORAGE_TOKEN, REMOTE_DATA_TOKEN } from '../../services';
import { getTranslocoTestingModule, MockAuthService, mockEditorsStore, MockFirebaseStorageService, MockFirestoreService, mockUserDataStore } from '../../testing';
import { EditorsStore } from '../editors/editors.store';
import { UserDataStore } from '../../shared';

describe('AwaitingApprovalComponent', () => {
  let component: AwaitingApprovalComponent;
  let fixture: ComponentFixture<AwaitingApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwaitingApprovalComponent, getTranslocoTestingModule()],
      providers: [
        { provide: REMOTE_DATA_TOKEN, useClass: MockFirestoreService },
        { provide: AUTH_TOKEN, useClass: MockAuthService },
        { provide: CLOUD_STORAGE_TOKEN, useClass: MockFirebaseStorageService },
        { provide: EditorsStore, useValue: mockEditorsStore },
        { provide: UserDataStore, useValue: mockUserDataStore },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AwaitingApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
