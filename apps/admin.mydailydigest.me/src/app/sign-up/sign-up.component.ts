import { Component, OnInit } from '@angular/core';
import { CommonComponent, PAGE_TITLE_KEY, SharedModule } from '../shared';
import { SIGNUP_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { RouterLink } from '@angular/router';
import { ROUTE } from '@cccsharonparish/mydailydigest';
import { NgOptimizedImage } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SignUpForm } from './sign-up-form';
import { TuiInputPhoneInternational } from '@taiga-ui/kit';
// import { TuiInputPhoneModule } from '@taiga-ui/legacy';



@Component({
  selector: 'app-sign-up',
  imports: [
    SharedModule,
    RouterLink,
    ReactiveFormsModule,
    NgOptimizedImage,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    TuiInputPhoneInternational

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
export class SignUpComponent extends CommonComponent implements OnInit {
  ROUTE = ROUTE;
  KEY = SIGNUP_STRING_RESOURCE_KEY;

  form!: FormGroup<SignUpForm>;

  firstNameFC = new FormControl<string | null>(null, {
    validators: [Validators.required, Validators.minLength(2)],
    updateOn: 'blur',
  });

  lastNameFC = new FormControl<string | null>(null, {
    validators: [Validators.required, Validators.minLength(2)],
    updateOn: 'blur',
  });

  phoneNoFC = new FormControl<string | null>(null, {
    validators: [Validators.required],
    updateOn: 'blur',
  });

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      firstName: this.firstNameFC,
      lastName: this.lastNameFC,
      phone: this.phoneNoFC,
    });
  }

  onSubmit() {}

  //TODO update user id token information with data from the user
}
