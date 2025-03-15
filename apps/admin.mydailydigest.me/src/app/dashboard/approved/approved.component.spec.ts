import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedComponent } from './approved.component';
import {
  AUTH_TOKEN,
  CLOUD_STORAGE_TOKEN,
  REMOTE_DATA_TOKEN,
} from '../../services';
import {
  getTranslocoTestingModule,
  MockAuthService,
  mockDashboardStore,
  MockFirebaseStorageService,
  MockFirestoreService,
} from '../../testing';
import { ComponentRef } from '@angular/core';
import { DashboardStore } from '../dashboard.store';
import { Storage } from '@angular/fire/storage';

describe('ApprovedComponent', () => {
  let component: ApprovedComponent;
  let fixture: ComponentFixture<ApprovedComponent>;
  let componentRef: ComponentRef<ApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovedComponent, getTranslocoTestingModule()],
      providers: [
        { provide: REMOTE_DATA_TOKEN, useClass: MockFirestoreService },
        { provide: AUTH_TOKEN, useClass: MockAuthService },
        { provide: CLOUD_STORAGE_TOKEN, useClass: MockFirebaseStorageService },
        { provide: Storage, useValue: {} },
        { provide: DashboardStore, useValue: mockDashboardStore },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ApprovedComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('languageCode', 'en');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
