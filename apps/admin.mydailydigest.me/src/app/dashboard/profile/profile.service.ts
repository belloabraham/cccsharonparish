import { inject, Injectable } from '@angular/core';
import { CLOUD_STORAGE_TOKEN, STORAGE_PATH } from '../../services';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private readonly cloudStorage = inject(CLOUD_STORAGE_TOKEN);

  uploadProfileImage(file: Blob | File) {
    return this.cloudStorage.uploadFileTo(
      [STORAGE_PATH.EDITORS, STORAGE_PATH.PROFILE],
      file
    );
  }
}
