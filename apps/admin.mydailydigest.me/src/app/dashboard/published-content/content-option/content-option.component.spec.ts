import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentOptionComponent } from './content-option.component';

describe('ContentOptionComponent', () => {
  let component: ContentOptionComponent;
  let fixture: ComponentFixture<ContentOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
