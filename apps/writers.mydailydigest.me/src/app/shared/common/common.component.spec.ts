import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonComponent } from './common.component';
import { PAGE_TITLE_KEY } from '../injection.token';
import { getTranslocoTestingModule } from '@cccsharonparish/mydailydigest';

describe('CommonComponent', () => {
  let component: CommonComponent;
  let fixture: ComponentFixture<CommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonComponent, getTranslocoTestingModule()],
      providers: [
        {
          provide: PAGE_TITLE_KEY,
          useValue: '',
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
