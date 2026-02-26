import { ChangeDetectionStrategy, Component, effect, HostListener, inject, OnInit } from '@angular/core';
import { CommonComponent, PAGE_TITLE_KEY, SharedModule } from '../shared';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { AUTH_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { Settings } from '@cccsharonparish/mydailydigest';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LanguageResourceService } from '@cccsharonparish/angular';
import { AUTH_TOKEN, AuthError } from '../services';
import { TuiAlertService } from '@taiga-ui/core';
import { environment } from '../../environments/environment';
import { REGEX } from '@cccsharonparish/core';

@Component({
  selector: 'app-auth',
  imports: [
    SharedModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: PAGE_TITLE_KEY, useValue: AUTH_STRING_RESOURCE_KEY.PAGE_TITLE },
  ],
})
export class AuthComponent extends CommonComponent implements OnInit {
  KEY = AUTH_STRING_RESOURCE_KEY;
  appName = environment.appName;
  emailFC = new FormControl<string | null>(null, {
    validators: [Validators.required, Validators.pattern(REGEX.EMAIL)],
    updateOn: 'blur',
  });
  form!: FormGroup;
  private readonly languageResourceService = inject(LanguageResourceService);
  private readonly auth = inject(AUTH_TOKEN);
  private readonly alertService = inject(TuiAlertService);
  isLoading = this.httpRequestProgressIndicatorService.isLoading;
  stringResources!: {
    login_error_title: string;
    login_error_message: string;
    ok: string;
    link_sent_title: string;
    link_sent_message?: string;
  };

  @HostListener('window:keydown', ['$event'])
  async handlePasteShortcut(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onSubmit();
    }
  }

  constructor() {
    super();
    effect(() => {
      if (this.appStore.language().loaded) {
        this.loadStringResource();
      }
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = new FormGroup({
      email: this.emailFC,
    });
  }

  loadStringResource() {
    this.stringResources = {
      login_error_title: this.languageResourceService.getString(
        this.KEY.LOGIN_ERROR_TITLE
      ),
      ok: this.languageResourceService.getString(this.KEY.OK),
      link_sent_title: this.languageResourceService.getString(
        this.KEY.LOGIN_LINK_SENT_TITLE
      ),
      login_error_message: this.languageResourceService.getString(
        this.KEY.UNAUTHORIZED_LOGIN_ERROR_MSG
      ),
    };
  }

  onSubmit() {
    this.form.markAllAsTouched()
    if (this.emailFC.valid) {
      const email = this.emailFC.value?.trim();
      this.sendLoginLinkTo(email!);
    }
  }

  private sendLoginLinkTo(email: string) {
    if (this.auth.emailIsAuthorized(email)) {
      this.sendSignInLinkTo(email);
    }

    if (!this.auth.emailIsAuthorized(email)) {
      this.alertService
        .open(this.stringResources.login_error_title, {
          label: this.stringResources.login_error_message,
          appearance: 'negative',
        })
        .subscribe();
    }
  }

  sendSignInLinkTo(email: string) {
    this.httpRequestProgressIndicatorService.showLoader();
    this.auth.sendSignInLinkTo(email).subscribe({
      next: () => {
        localStorage.setItem(Settings.loginEmailKey(environment.domain), email);
        this.showMailSentSuccessAlert(email);
        this.httpRequestProgressIndicatorService.hideLoader();
      },
      error: (error) => {
        this.httpRequestProgressIndicatorService.hideLoader();
        const message = AuthError.message(error.code);
        this.alertService
          .open(this.stringResources.login_error_title, {
            label: message,
            appearance: 'negative',
          })
          .subscribe();
      },
    });
  }

  private showMailSentSuccessAlert(email: string) {
    const message = this.languageResourceService.getStringWithParameter(
      this.KEY.LOGIN_LINK_SENT_MSG,
      {
        value: email,
      }
    );

    this.stringResources = {
      ...this.stringResources,
      link_sent_message: message,
    };

    this.alertService
      .open(this.stringResources.link_sent_title, {
        label: this.stringResources.link_sent_message,
        appearance: 'positive',
        autoClose: 6000,
      })
      .subscribe();
  }
}
