import { Component, inject, OnInit, signal } from '@angular/core';
import { SharedModule, UserDataComponent } from '../../shared';
import { TuiFileLike, TuiFiles } from '@taiga-ui/kit';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiIcon, TuiLoader } from '@taiga-ui/core';
import { PROFILE_STRING_RESOURCE_KEY } from './i18n/string-res-keys';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { UserDataForm } from '../../shared/user-data/user-data-form';
import { MatIconModule } from '@angular/material/icon';
import { HttpRequestProgressIndicatorService } from '../../services';
import { SDDFileUploadDirective } from '@cccsharonparish/angular';
import { IUserUIState } from '@cccsharonparish/mydailydigest';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  imports: [
    SharedModule,
    UserDataComponent,
    TuiFiles,
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
  protected readonly profileImageFC = new FormControl<TuiFileLike | null>(null);
  imageUrl = signal<string | undefined>(undefined);
  uploadingProfileImage = signal<boolean>(false);
  private readonly httpRequestProgressIndicatorService = inject(
    HttpRequestProgressIndicatorService
  );
  isLoading = this.httpRequestProgressIndicatorService.isLoading;
  private readonly MAX_ALLOWED_PROFILE_IMAGE_SIZE_IN_BYTES = 100 * 1024; //100Kb

  ngOnInit(): void {
    this.profileImageFC.valueChanges.subscribe({
      next: () => {},
    });
  }

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

  onFileUpload(e: any) {
    if (e.target.files && e.target.files[0]) {
      const file: File = e.target.files[0];
      if (file.size > this.MAX_ALLOWED_PROFILE_IMAGE_SIZE_IN_BYTES) {
      } else {
      }
    }
  }
}
