import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorsComponent } from './editors.component';
import { EditorsStore } from './editors.store';
import { getTranslocoTestingModule, mockEditorsStore, MockFirestoreService } from '../../testing';
import { REMOTE_DATA_TOKEN } from '../../services';

describe('EditorsComponent', () => {
  let component: EditorsComponent;
  let fixture: ComponentFixture<EditorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorsComponent, getTranslocoTestingModule()],
      providers: [
        { provide: REMOTE_DATA_TOKEN, useClass: MockFirestoreService },
        { provide: EditorsStore, useValue: mockEditorsStore },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
