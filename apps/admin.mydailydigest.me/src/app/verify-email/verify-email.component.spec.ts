import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmailComponent } from './verify-email.component';
import { getTranslocoTestingModule, MockAuthService } from '../testing';
import { AUTH_TOKEN } from '../services';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('VerifyEmailComponent', () => {
  let component: VerifyEmailComponent;
  let fixture: ComponentFixture<VerifyEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyEmailComponent, getTranslocoTestingModule()],
      providers: [{ provide: AUTH_TOKEN, useClass: MockAuthService }, provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
