import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyDailyDigestPageNotFoundComponent } from './page-not-found.component';

describe('MyDailyDigestPageNotFoundComponent', () => {
  let component: MyDailyDigestPageNotFoundComponent;
  let fixture: ComponentFixture<MyDailyDigestPageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDailyDigestPageNotFoundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyDailyDigestPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
