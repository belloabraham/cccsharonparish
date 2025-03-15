import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContentComponent } from './new-content.component';
import { AUTH_TOKEN, CLOUD_STORAGE_TOKEN, REMOTE_DATA_TOKEN } from '../../services';
import { getTranslocoTestingModule, MockAuthService, MockFirebaseStorageService, MockFirestoreService } from '../../testing';

describe('NewContentComponent', () => {
  let component: NewContentComponent;
  let fixture: ComponentFixture<NewContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewContentComponent, getTranslocoTestingModule()],
      providers: [
        { provide: REMOTE_DATA_TOKEN, useClass: MockFirestoreService },
        { provide: AUTH_TOKEN, useClass: MockAuthService },
        { provide: CLOUD_STORAGE_TOKEN, useClass: MockFirebaseStorageService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NewContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
