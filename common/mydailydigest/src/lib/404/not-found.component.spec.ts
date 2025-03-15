import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MDDNotFoundComponent } from './not-found.component';
import { getTranslocoTestingModule } from '../testing/transloco-testing-module';


describe('NotFoundComponent', () => {
  let component: MDDNotFoundComponent;
  let fixture: ComponentFixture<MDDNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MDDNotFoundComponent, getTranslocoTestingModule()],
    }).compileComponents();

    fixture = TestBed.createComponent(MDDNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
