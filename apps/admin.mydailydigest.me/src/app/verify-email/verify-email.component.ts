import { Component, effect, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LanguageResourceService } from '@cccsharonparish/angular';
import { MatButtonModule } from '@angular/material/button';
import { CommonComponent, PAGE_TITLE_KEY, SharedModule } from '../shared';
import { VERIFY_MAIL_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AUTH_TOKEN, AuthError } from '../services';
import { REGEX, ROUTE, Settings } from '@cccsharonparish/mydailydigest';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { TuiAlertService } from '@taiga-ui/core';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-verify-email',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    SharedModule,
    NgOptimizedImage,
  ],
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.scss',
  providers: [
    {
      provide: PAGE_TITLE_KEY,
      useValue: VERIFY_MAIL_STRING_RESOURCE_KEY.PAGE_TITLE,
    },
  ],
})
export class VerifyEmailComponent extends CommonComponent implements OnInit {
  KEY = VERIFY_MAIL_STRING_RESOURCE_KEY;
  emailFC = new FormControl<string | null>(null, {
    validators: [Validators.required, Validators.pattern(REGEX.EMAIL)],
    updateOn: 'blur',
  });
  form!: FormGroup;
  private readonly auth = inject(AUTH_TOKEN);
  private readonly router = inject(Router);
  private readonly authService = inject(AUTH_TOKEN);
  private readonly alertService = inject(TuiAlertService);
  private readonly languageResourceService = inject(LanguageResourceService);
  isLoading = this.httpRequestProgressIndicatorService.isLoading;

  private signInMail = localStorage.getItem(
    Settings.loginEmailKey(environment.domain)
  );

  stringResources!: {
    login_error_title: string;
  };

  constructor() {
    super();
    if (this.signInMail) {
      this.verifyEmail(this.signInMail);
    }
    this.onAuthStateChanged();
    effect(() => {
      if (this.appStore.language().loaded) {
        this.loadStringResource();
      }
    });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: this.emailFC,
    });
  }

  onAuthStateChanged() {
    this.authService.getAuthSate$().subscribe({
      next: (user) => {
        if (user?.displayName) {
          this.router.navigate([ROUTE.ROOT]);
        }
        if (user) {
          this.router.navigate([ROUTE.SIGN_UP]);
        }
      },
    });
  }

  private loadStringResource() {
    this.stringResources = {
      login_error_title: this.languageResourceService.getString(
        this.KEY.LOGIN_ERROR_TITLE
      ),
    };
  }

  private verifyEmail(email: string, onError?: (error: any) => void) {
    this.auth.signInWithEmailLink(email, location.href).subscribe({
      next: () => {
        localStorage.removeItem(Settings.loginEmailKey(environment.domain));
        this.router.navigate([ROUTE.ROOT]);
      },
      error: onError,
    });
  }

  onSubmit() {
    if (this.emailFC.valid) {
      const email = this.emailFC.value!.trim();
      this.verifyEmail(email, (error) => {
        const message = AuthError.message(error.code);
        this.alertService
          .open(message, {
            label: this.stringResources.login_error_title,
            appearance: 'negative',
          })
          .subscribe();
      });
    }
  }
}
