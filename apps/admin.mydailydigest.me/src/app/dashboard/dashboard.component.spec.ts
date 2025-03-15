import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {
  AUTH_TOKEN,
  CLOUD_STORAGE_TOKEN,
  REMOTE_DATA_TOKEN,
} from '../services';
import {
  getTranslocoTestingModule,
  MockAuthService,
  mockContentStore,
  mockEditorsStore,
  MockFirebaseStorageService,
  MockFirestoreService,
  mockUserDataStore,
} from '../testing';
import { EditorsStore } from './editors/editors.store';
import { UserDataStore } from '../shared';
import { ContentStore } from './shared';
import { RouterTestingModule } from '@angular/router/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DashboardComponent,
        getTranslocoTestingModule(),
        RouterTestingModule,
      ],
      providers: [
        { provide: AUTH_TOKEN, useClass: MockAuthService },
        { provide: REMOTE_DATA_TOKEN, useClass: MockFirestoreService },
        { provide: CLOUD_STORAGE_TOKEN, useClass: MockFirebaseStorageService },
        { provide: EditorsStore, useValue: mockEditorsStore },
        { provide: ContentStore, useValue: mockContentStore },
        { provide: UserDataStore, useValue: mockUserDataStore },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
