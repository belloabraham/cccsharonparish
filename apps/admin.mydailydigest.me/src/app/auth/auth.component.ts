import { Component, effect, inject, OnInit } from '@angular/core';
import { SharedModule } from '../shared';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { AUTH_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import {
  REGEX,
  Settings,
  UseCaseService,
} from '@cccsharonparish/mydailydigest';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppStore } from 'common/mydailydigest/src/lib/app.store';
import { LanguageResourceService } from '@cccsharonparish/angular';
import { Title } from '@angular/platform-browser';
import { AUTH_TOKEN, AuthError } from '../services';
import { TuiAlertService } from '@taiga-ui/core';
import { HttpRequestLoadingIndicatorService } from '../services/http-request-loading-indicator.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-auth',
  imports: [
    SharedModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    MatButtonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  KEY = AUTH_STRING_RESOURCE_KEY;
  emailFC = new FormControl<string | null>(null, {
    validators: [Validators.required, Validators.pattern(REGEX.EMAIL)],
    updateOn: 'blur',
  });
  form!: FormGroup;
  private readonly appStore = inject(AppStore);
  private readonly languageResourceService = inject(LanguageResourceService);
  private readonly title = inject(Title);
  private readonly auth = inject(AUTH_TOKEN);
  private readonly useCaseService = inject(UseCaseService);
  private readonly alertService = inject(TuiAlertService);
  private httpRequestLoadingIndicatorService = inject(
    HttpRequestLoadingIndicatorService
  );
  isLoading = this.httpRequestLoadingIndicatorService.isLoading;

  stringResources!: {
    login_error_title: string;
    login_error_message: string;
    ok: string;
    link_sent_title: string;
    link_sent_message?: string;
  };

  constructor() {
    effect(() => {
      if (this.appStore.language().loaded) {
        this.setPageTitle();
        this.loadStringResource();
      }
    });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: this.emailFC,
    });
  }

  private setPageTitle() {
    const pageTitle = this.useCaseService.getPageTitle(this.KEY.PAGE_TITLE);
    this.title.setTitle(pageTitle);
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
    if (this.emailFC.valid) {
      const email = this.emailFC.value?.trim();
      this.sendLoginLinkTo(email!);
    }
  }

  private async sendLoginLinkTo(email: string) {
    if (this.auth.emailIsAuthorized(email)) {
      await this.sendSignInLinkTo(email);
    }

    if (!this.auth.emailIsAuthorized(email)) {
      this.alertService
        .open(this.stringResources.login_error_message, {
          label: this.stringResources.login_error_title,
          appearance: 'negative',
        })
        .subscribe();
    }
  }

  async sendSignInLinkTo(email: string) {
    try {
      await this.auth.sendSignInLinkTo(email);
      localStorage.setItem(Settings.loginEmailKey(environment.domain), email);
      this.showMailSentSuccessAlert(email);
    } catch (error: any) {
      const message = AuthError.message(error.code);
      this.alertService
        .open(message, {
          label: this.stringResources.login_error_title,
          appearance: 'negative',
        })
        .subscribe();
    }
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
      .open(message, {
        label: this.stringResources.link_sent_message,
        appearance: 'positive',
      })
      .subscribe();
  }
}
