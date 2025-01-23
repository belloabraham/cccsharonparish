import { Component, inject, OnInit, signal } from '@angular/core';
import { SharedModule, UserDataComponent } from '../../shared';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TuiIcon, TuiLoader } from '@taiga-ui/core';
import { PROFILE_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { UserDataForm } from '../../shared/user-data/user-data-form';
import { MatIconModule } from '@angular/material/icon';
import { HttpRequestProgressIndicatorService } from '../../services';
import {
  CustomValidators,
  SDDFileUploadDirective,
} from '@cccsharonparish/angular';
import { IUserUIState, JSON } from '@cccsharonparish/mydailydigest';
import { ProfileService } from './profile.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-profile',
  imports: [
    SharedModule,
    UserDataComponent,
    ReactiveFormsModule,
    TuiIcon,
    NgIf,
    MatButtonModule,
    NgOptimizedImage,
    MatIconModule,
    TuiLoader,
    SDDFileUploadDirective,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  KEY = PROFILE_STRING_RESOURCE_KEY;
  profileService = inject(ProfileService);
  private readonly MAX_ALLOWED_PROFILE_IMAGE_SIZE_IN_BYTES = 300 * 1024; //300Kb
  protected readonly profileImageFC = new FormControl<File | null>(null, [
    Validators.required,
    CustomValidators.maxFileSize(this.MAX_ALLOWED_PROFILE_IMAGE_SIZE_IN_BYTES, {
      maxFileSize: `Image is too large, re-upload an image that is less than ${
        this.MAX_ALLOWED_PROFILE_IMAGE_SIZE_IN_BYTES / 1024
      }Kb in size`,
    }),
  ]);

  imageUrl = signal<string | undefined>(undefined);
  uploadingProfileImage = signal<boolean>(false);
  private readonly httpRequestProgressIndicatorService = inject(
    HttpRequestProgressIndicatorService
  );
  isLoading = this.httpRequestProgressIndicatorService.isLoading;
  private subscriptions = new SubSink();

  ngOnInit(): void {
    this.profileImageFC.valueChanges.subscribe({
      next: (file) => {
        if (file) {
          this.uploadImage(file);
        }
      },
    });
  }

  uploadImage(file: File) {}

  onSubmit(form: FormGroup<UserDataForm>) {
    form.markAllAsTouched();
    if (form.valid) {
      this.updateUserProfile(form);
    }
  }

  updateUserProfile(form: FormGroup<UserDataForm>) {
    const value = form.value;
    const user: IUserUIState = {
      firstName: JSON.escapeSpecialChars(value.firstName!),
      lastName: JSON.escapeSpecialChars(value.lastName!),
      phone: value.phone!,
    };
    this.subscriptions.sink = this.profileService.updateUser(user).subscribe({
      next: (response) => {
        //TODO Update user store
        this.showUserUpdateSuccessAlert();
      },
      error: (error) => {
        this.showFailedUserUpdateAlert();
      },
    });
  }

  showFailedUserUpdateAlert() {}

  showUserUpdateSuccessAlert() {}
}
