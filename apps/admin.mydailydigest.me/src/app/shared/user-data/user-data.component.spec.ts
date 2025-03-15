import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataComponent } from './user-data.component';
import { getTranslocoTestingModule } from '../../testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('UserDataComponent', () => {
  let component: UserDataComponent;
  let fixture: ComponentFixture<UserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDataComponent, getTranslocoTestingModule()],
      providers:[provideAnimationsAsync()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
