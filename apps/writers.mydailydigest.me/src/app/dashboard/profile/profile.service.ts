import { inject, Injectable } from '@angular/core';
import { AUTH_TOKEN, CLOUD_STORAGE_TOKEN, STORAGE_PATH } from '../../services';
import { getFileExtension, renameFile } from '@cccsharonparish/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private readonly cloudStorage = inject(CLOUD_STORAGE_TOKEN);
  private readonly authService = inject(AUTH_TOKEN);

  uploadProfileImage(file: File) {
    const userId = this.authService.getUserId()!;
    const fileNameWithExt = userId + '.' + getFileExtension(file.name);
    const profileImage = renameFile(file, fileNameWithExt);
    return this.cloudStorage.uploadFileTo(
      [STORAGE_PATH.EDITORS, STORAGE_PATH.PROFILE],
      fileNameWithExt,
      profileImage
    );
  }
}
