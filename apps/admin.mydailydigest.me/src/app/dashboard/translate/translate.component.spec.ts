import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateComponent } from './translate.component';
import {
  MockAuthService,
  mockDashboardStore,
  MockFirebaseStorageService,
  MockFirestoreService,
} from '../../test';
import {
  AUTH_TOKEN,
  CLOUD_STORAGE_TOKEN,
  REMOTE_DATA_TOKEN,
} from '../../services';
import { Storage } from '@angular/fire/storage';
import { DashboardStore } from '../dashboard.store';
import { ComponentRef } from '@angular/core';
import { getTranslocoTestingModule } from '@cccsharonparish/mydailydigest';

describe('TranslateComponent', () => {
  let component: TranslateComponent;
  let fixture: ComponentFixture<TranslateComponent>;
  let componentRef: ComponentRef<TranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateComponent, getTranslocoTestingModule()],
      providers: [
        { provide: REMOTE_DATA_TOKEN, useClass: MockFirestoreService },
        { provide: AUTH_TOKEN, useClass: MockAuthService },
        { provide: CLOUD_STORAGE_TOKEN, useClass: MockFirebaseStorageService },
        { provide: Storage, useValue: {} },
        { provide: DashboardStore, useValue: mockDashboardStore },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TranslateComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('languageCode', 'en');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
