import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyDailyDigestPageNotFoundComponent } from './page-not-found.component';
import { TranslocoRootModule } from '@cccsharonparish.org/angular';
import { HttpClientModule } from '@angular/common/http';

describe('MyDailyDigestPageNotFoundComponent', () => {
  let component: MyDailyDigestPageNotFoundComponent;
  let fixture: ComponentFixture<MyDailyDigestPageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MyDailyDigestPageNotFoundComponent,
        TranslocoRootModule,
        HttpClientModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MyDailyDigestPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
