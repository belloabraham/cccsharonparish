import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContentComponent } from './new-content.component';
import {
  AUTH_TOKEN,
  CLOUD_STORAGE_TOKEN,
  REMOTE_DATA_TOKEN,
} from '../../services';
import {
  MockAuthService,
  mockDashboardStore,
  MockFirebaseStorageService,
  MockFirestoreService,
} from '../../test';
import { DraftService } from './draft.service';
import { ComponentRef } from '@angular/core';
import { Storage } from '@angular/fire/storage';
import { DashboardStore } from '../dashboard.store';
import { getTranslocoTestingModule } from '@cccsharonparish/mydailydigest';

describe('NewContentComponent', () => {
  let component: NewContentComponent;
  let fixture: ComponentFixture<NewContentComponent>;
  let componentRef: ComponentRef<NewContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewContentComponent, getTranslocoTestingModule()],
      providers: [
        DraftService,
        { provide: REMOTE_DATA_TOKEN, useClass: MockFirestoreService },
        { provide: AUTH_TOKEN, useClass: MockAuthService },
        { provide: CLOUD_STORAGE_TOKEN, useClass: MockFirebaseStorageService },
        { provide: Storage, useValue: {} },
        { provide: DashboardStore, useValue: mockDashboardStore },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NewContentComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('languageCode', 'en');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
