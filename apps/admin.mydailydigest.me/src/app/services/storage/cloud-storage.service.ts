import { Injectable, InjectionToken } from '@angular/core';
import { ICloudStorage } from './cloud-storage.interface';
import { FirebaseStorageService } from './firebase/firebase-storage.service';
import { StorageReference, Storage } from '@angular/fire/storage';

export const CLOUD_STORAGE_TOKEN = new InjectionToken<ICloudStorage>(
  'cloud-storage',
  {
    providedIn: 'any',
    factory: () =>
      new CloudStorageService(new FirebaseStorageService()),
  }
);

@Injectable()
export class CloudStorageService implements ICloudStorage {
  constructor(private readonly firebaseStorage: FirebaseStorageService) {}

  deleteFileFrom(pathSegment: string[]) {
    return this.firebaseStorage.deleteFileFrom(pathSegment);
  }

  getFileDownloadURL(storageRef: StorageReference) {
    return this.firebaseStorage.getFileDownloadURL(storageRef);
  }

  uploadFileTo(
    pathSegment: string[],
    file: Blob | Uint8Array | ArrayBuffer | File
  ) {
    return this.firebaseStorage.uploadFileTo(pathSegment, file);
  }
}
