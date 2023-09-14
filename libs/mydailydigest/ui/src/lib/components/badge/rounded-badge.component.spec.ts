import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MDDRoundedBadgeComponent } from './rounded-badge.component';

describe('BadgeComponent', () => {
  let component: MDDRoundedBadgeComponent;
  let fixture: ComponentFixture<MDDRoundedBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MDDRoundedBadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MDDRoundedBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
