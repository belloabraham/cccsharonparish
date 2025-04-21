import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyStatusComponent } from './empty-status.component';
import { ComponentRef } from '@angular/core';

describe('EmptyStatusComponent', () => {
  let component: EmptyStatusComponent;
  let fixture: ComponentFixture<EmptyStatusComponent>;
  let componentRef: ComponentRef<EmptyStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyStatusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyStatusComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('description', 'Lorem ipsum');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
