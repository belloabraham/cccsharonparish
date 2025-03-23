import {
  Component,
  HostListener,
  inject,
  OnDestroy,
  viewChild,
} from '@angular/core';
import {
  CommonComponent,
  PAGE_TITLE_KEY,
  SharedModule,
  UserDataComponent,
  UserDataStore,
} from '../shared';
import { SIGNUP_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup } from '@angular/forms';
import { UserDataForm } from '../shared/user-data/user-data-form';
import { IUserUIState, ROUTE } from '@cccsharonparish/mydailydigest';
import { Router } from '@angular/router';
import { TuiAlertService } from '@taiga-ui/core';
import { LanguageResourceService } from '@cccsharonparish/angular';
import { JSON } from '@cccsharonparish/core';

@Component({
  selector: 'app-sign-up',
  imports: [SharedModule, NgOptimizedImage, MatButtonModule, UserDataComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  providers: [
    {
      provide: PAGE_TITLE_KEY,
      useValue: SIGNUP_STRING_RESOURCE_KEY.PAGE_TITLE,
    },
  ],
})
export class SignUpComponent extends CommonComponent implements OnDestroy {
  KEY = SIGNUP_STRING_RESOURCE_KEY;
  isLoading = this.httpRequestProgressIndicatorService.isLoading;
  private readonly router = inject(Router);
  private readonly alertService = inject(TuiAlertService);
  private readonly languageResourceService = inject(LanguageResourceService);
  private readonly userDataStore = inject(UserDataStore);
  userDataForm = viewChild.required<UserDataComponent>('userDataForm');

  @HostListener('window:keydown', ['$event'])
  async handlePasteShortcut(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onSubmit(this.userDataForm().form);
    }
  }

  onSubmit(form: FormGroup<UserDataForm>) {
    form.markAllAsTouched();
    if (form.valid) {
      this.createUser(form);
    }
  }

  private createUser(form: FormGroup<UserDataForm>) {
    const value = form.value;
    const user: IUserUIState = {
      firstName: JSON.escapeSpecialChars(value.firstName!),
      lastName: JSON.escapeSpecialChars(value.lastName!),
      phone: value.phone!,
    };
    this.httpRequestProgressIndicatorService.showLoader();
    this.subscriptions.sink = this.userDataStore.createUser(user).subscribe({
      next: (response) => {
        this.httpRequestProgressIndicatorService.hideLoader();
        this.router.navigate([ROUTE.ROOT]);
      },
      error: (error) => {
        this.httpRequestProgressIndicatorService.hideLoader();
        this.showCreateUserFailedErrorAlert();
      },
    });
  }

  private showCreateUserFailedErrorAlert() {
    const message = this.languageResourceService.getString(
      this.KEY.USER_CREATE_ERROR_MSG
    );
    this.alertService
      .open(message, {
        label: 'Error',
        appearance: 'negative',
      })
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
