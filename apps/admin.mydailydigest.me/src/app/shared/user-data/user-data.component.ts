import { Component, effect, inject } from '@angular/core';
import { SharedModule } from '../shared.module';
import { TuiInputPhoneInternational } from '@taiga-ui/experimental';
import { TuiDropdownMobile } from '@taiga-ui/addon-mobile';
import {
  tuiInputPhoneInternationalOptionsProvider,
  TuiSortCountriesPipe,
  TuiFieldErrorPipe,
} from '@taiga-ui/kit';
import { TuiTextfield, TuiError } from '@taiga-ui/core';
import { getCountries } from 'libphonenumber-js';
import { defer } from 'rxjs';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import {
  CustomValidator,
  LanguageResourceService,
} from '@cccsharonparish/angular';
import { UserDataForm } from './user-data-form';
import { USER_DATA_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppStore } from 'common/mydailydigest/src/lib/app.store';

@Component({
  selector: 'app-user-data',
  imports: [
    SharedModule,
    TuiInputPhoneInternational,
    TuiSortCountriesPipe,
    AsyncPipe,
    TuiTextfield,
    TuiDropdownMobile,
    TuiError,
    TuiFieldErrorPipe,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss',
  providers: [
    tuiInputPhoneInternationalOptionsProvider({
      metadata: defer(async () =>
        import('libphonenumber-js/max/metadata').then((m) => m.default)
      ),
    }),
  ],
})
export class UserDataComponent {
  protected readonly countries = getCountries();
  protected countryIsoCode: any = 'NG';
  KEY = USER_DATA_STRING_RESOURCE_KEY;
  private readonly appStore = inject(AppStore);
  private readonly languageService = inject(LanguageResourceService);

  form!: FormGroup<UserDataForm>;

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
          other: this.languageService.getString(this.KEY.INVALID_PHONE_MSG),
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
}
