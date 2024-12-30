import { Component, effect, inject, OnInit } from '@angular/core';
import { CommonComponent, PAGE_TITLE_KEY, SharedModule } from '../shared';
import { SIGNUP_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { RouterLink } from '@angular/router';
import { ROUTE } from '@cccsharonparish/mydailydigest';
import { NgOptimizedImage, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { SignUpForm } from './sign-up-form';
import {
  tuiInputPhoneInternationalOptionsProvider,
  TuiSortCountriesPipe,
  TuiFieldErrorPipe,
} from '@taiga-ui/kit';
import { TuiTextfield, TuiError } from '@taiga-ui/core';
import { getCountries } from 'libphonenumber-js';
import { defer } from 'rxjs';
import { TuiInputPhoneInternational } from '@taiga-ui/experimental';
import { TuiDropdownMobile } from '@taiga-ui/addon-mobile';
import {
  CustomValidator,
  LanguageResourceService,
} from '@cccsharonparish/angular';

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
    FormsModule,
    TuiInputPhoneInternational,
    TuiSortCountriesPipe,
    AsyncPipe,
    TuiTextfield,
    TuiDropdownMobile,
    TuiError,
    TuiFieldErrorPipe,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  providers: [
    {
      provide: PAGE_TITLE_KEY,
      useValue: SIGNUP_STRING_RESOURCE_KEY.PAGE_TITLE,
    },
    tuiInputPhoneInternationalOptionsProvider({
      metadata: defer(async () =>
        import('libphonenumber-js/max/metadata').then((m) => m.default)
      ),
    }),
  ],
})
export class SignUpComponent extends CommonComponent {
  ROUTE = ROUTE;
  KEY = SIGNUP_STRING_RESOURCE_KEY;
  protected readonly countries = getCountries();
  protected countryIsoCode: any = 'NG';
  protected value = '';
  isLoading = this.httpRequestProgressIndicatorService.isLoading;
  private readonly languageResourceService = inject(LanguageResourceService);

  form!: FormGroup<SignUpForm>;

  firstNameFC = new FormControl<string | null>(null, {
    validators: [CustomValidator.requiredString()],
    updateOn: 'blur',
  });

  lastNameFC = new FormControl<string | null>(null, {
    validators: [CustomValidator.requiredString()],
    updateOn: 'blur',
  });

  phoneNoFC!: FormControl<string | null>;

  constructor() {
    super();
    effect(() => {
      if (this.appStore.language().loaded) {
        this.initForm();
      }
    });
  }

  initForm() {
    this.phoneNoFC = new FormControl<string | null>(null, {
      validators: [
        CustomValidator.validPhoneNumber({
          other: this.languageResourceService.getString(
            this.KEY.INVALID_PHONE_MSG
          ),
        }),
      ],
      updateOn: 'blur',
    });

    this.form = new FormGroup({
      firstName: this.firstNameFC,
      lastName: this.lastNameFC,
      phone: this.phoneNoFC,
    });
  }

  onSubmit() {}

  //TODO update user id token information with data from the user
}
