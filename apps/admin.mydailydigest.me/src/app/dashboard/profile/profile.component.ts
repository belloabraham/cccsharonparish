import { Component, inject, signal } from '@angular/core';
import { SharedModule, UserDataComponent } from '../../shared';
import { TuiAvatar, TuiFileLike, TuiFiles } from '@taiga-ui/kit';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiIcon, TuiLoader } from '@taiga-ui/core';
import { PROFILE_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { UserDataForm } from '../../shared/user-data/user-data-form';
import { MatIconModule } from '@angular/material/icon';
import { HttpRequestProgressIndicatorService } from '../../services';

@Component({
  selector: 'app-profile',
  imports: [
    SharedModule,
    UserDataComponent,
    TuiFiles,
    ReactiveFormsModule,
    TuiAvatar,
    TuiIcon,
    NgIf,
    MatButtonModule,
    NgOptimizedImage,
    MatIconModule,
    TuiLoader,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  KEY = PROFILE_STRING_RESOURCE_KEY;
  protected readonly control = new FormControl<TuiFileLike | null>(null);
  imageUrl = signal<string | undefined>(undefined);
  uploadingProfileImage = signal<boolean>(false);
  private readonly httpRequestProgressIndicatorService = inject(
    HttpRequestProgressIndicatorService
  );
  isLoading = this.httpRequestProgressIndicatorService.isLoading;

  onSubmit(form: FormGroup<UserDataForm>) {
    form.markAllAsTouched();

    if (form.valid) {
      const value = form.value;
      // const user: IUserUIState = {
      //   firstName: value.firstName!,
      //   lastName: value.lastName!,
      //   phone: value.phone!,
      // };
      // this.signUpService.createUser(user);
    }
  }
}
