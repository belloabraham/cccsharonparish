import { Component, inject, OnInit, signal } from '@angular/core';
import { SharedModule, UserDataComponent } from '../../shared';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiIcon, TuiLoader } from '@taiga-ui/core';
import { PROFILE_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { UserDataForm } from '../../shared/user-data/user-data-form';
import { MatIconModule } from '@angular/material/icon';
import { HttpRequestProgressIndicatorService } from '../../services';
import {
  CustomValidator,
  SDDFileUploadDirective,
} from '@cccsharonparish/angular';
import { IUserUIState } from '@cccsharonparish/mydailydigest';
import { ProfileService } from './profile.service';

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
  private readonly MAX_ALLOWED_PROFILE_IMAGE_SIZE_IN_BYTES = 300 * 1024; //100Kb
  protected readonly profileImageFC = new FormControl<File | null>(null, [
    CustomValidator.maxFileSize(this.MAX_ALLOWED_PROFILE_IMAGE_SIZE_IN_BYTES, {
      error: `Image is too large, image should not be greater than ${
        this.MAX_ALLOWED_PROFILE_IMAGE_SIZE_IN_BYTES / 1024
      }Kb, reduce image size or use another image and re-upload`,
    }),
  ]);

  imageUrl = signal<string | undefined>(undefined);
  uploadingProfileImage = signal<boolean>(false);
  private readonly httpRequestProgressIndicatorService = inject(
    HttpRequestProgressIndicatorService
  );
  isLoading = this.httpRequestProgressIndicatorService.isLoading;

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
      const value = form.value;
      const user: IUserUIState = {
        firstName: value.firstName!,
        lastName: value.lastName!,
        phone: value.phone!,
      };
      this.updateUserProfile(user);
    }
  }

  updateUserProfile(user: IUserUIState) {
    this.profileService.updateUser(user).subscribe({
      next: () => {},
      error: (error) => {},
    });
  }
}
