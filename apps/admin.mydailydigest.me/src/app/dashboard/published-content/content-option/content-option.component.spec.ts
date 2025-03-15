import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentOptionComponent } from './content-option.component';
import { PublishedContentStore } from '../published-content-store';
import { getTranslocoTestingModule, mockContentStore, mockPublishedContentStore } from '../../../testing';
import { ContentStore } from '../../shared';

describe('ContentOptionComponent', () => {
  let component: ContentOptionComponent;
  let fixture: ComponentFixture<ContentOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentOptionComponent, getTranslocoTestingModule()],
      providers: [
        { provide: PublishedContentStore, useValue: mockPublishedContentStore },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
