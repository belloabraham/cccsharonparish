import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentListComponent } from './content-list.component';
import { AUTH_TOKEN, REMOTE_DATA_TOKEN } from '../../../services';
import {
  getTranslocoTestingModule,
  MockAuthService,
  mockDashboardStore,
  MockFirestoreService,
} from '../../../testing';
import { PublishedContentStore } from '../published-content-store';
import { DashboardStore } from '../../dashboard.store';
import { ContentStore } from '../../shared';

describe('ContentListComponent', () => {
  let component: ContentListComponent;
  let fixture: ComponentFixture<ContentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentListComponent, getTranslocoTestingModule()],
      providers: [
        { provide: AUTH_TOKEN, useClass: MockAuthService },
        { provide: REMOTE_DATA_TOKEN, useClass: MockFirestoreService },
        { provide: PublishedContentStore, useValue: {} },
        { provide: DashboardStore, useValue: mockDashboardStore },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
