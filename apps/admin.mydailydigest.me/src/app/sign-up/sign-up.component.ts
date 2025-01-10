import { Component, inject } from '@angular/core';
import { CommonComponent, PAGE_TITLE_KEY, SharedModule } from '../shared';
import { SIGNUP_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {
  FormGroup,
} from '@angular/forms';
import { UserDataForm } from '../shared/user-data/user-data-form';
import { SignUpService } from './sign-up.service';
import { IUserUIState } from '@cccsharonparish/mydailydigest';
import { UserDataComponent } from '../shared/user-data/user-data.component';

@Component({
  selector: 'app-sign-up',
  imports: [
    SharedModule,
    NgOptimizedImage,
    MatButtonModule,
    UserDataComponent
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  providers: [
    {
      provide: PAGE_TITLE_KEY,
      useValue: SIGNUP_STRING_RESOURCE_KEY.PAGE_TITLE,
    },
  ],
})
export class SignUpComponent extends CommonComponent {
  KEY = SIGNUP_STRING_RESOURCE_KEY;
  isLoading = this.httpRequestProgressIndicatorService.isLoading;
  signUpService = inject(SignUpService);

  onSubmit(form: FormGroup<UserDataForm>) {
    form.markAllAsTouched();
    if (form.valid) {
      const value = form.value;
      const user: IUserUIState = {
        firstName: value.firstName!,
        lastName: value.lastName!,
        phone: value.phone!,
      };
      this.signUpService.createUser(user);
    }
  }
}
