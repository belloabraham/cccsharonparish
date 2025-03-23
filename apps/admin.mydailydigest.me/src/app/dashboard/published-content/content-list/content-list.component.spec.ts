import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentListComponent } from './content-list.component';
import { AUTH_TOKEN, REMOTE_DATA_TOKEN } from '../../../services';
import {
  MockAuthService,
  mockDashboardStore,
  MockFirestoreService,
  mockPublishedContentStore,
} from '../../../test';
import { PublishedContentStore } from '../published-content-store';
import { DashboardStore } from '../../dashboard.store';
import { ContentStore } from '../../shared';
import { ComponentRef } from '@angular/core';
import { getTranslocoTestingModule } from '@cccsharonparish/mydailydigest';

describe('ContentListComponent', () => {
  let component: ContentListComponent;
  let fixture: ComponentFixture<ContentListComponent>;
  let componentRef: ComponentRef<ContentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentListComponent, getTranslocoTestingModule()],
      providers: [
        { provide: AUTH_TOKEN, useClass: MockAuthService },
        { provide: REMOTE_DATA_TOKEN, useClass: MockFirestoreService },
        { provide: PublishedContentStore, useValue: mockPublishedContentStore },
        { provide: DashboardStore, useValue: mockDashboardStore },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentListComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('contentYear', '2025');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
