import { Injectable, InjectionToken } from '@angular/core';
import { ICloudStorage } from './cloud-storage.interface';
import { FirebaseStorageService } from './firebase/firebase-storage.service';
import { StorageReference, UploadResult } from '@angular/fire/storage';
import { Observable } from 'rxjs';

export const CLOUD_STORAGE_TOKEN = new InjectionToken<ICloudStorage>(
  'cloud-storage',
  {
    // providedIn: 'any',
    factory: () => new CloudStorageService(new FirebaseStorageService()),
  }
);

@Injectable()
export class CloudStorageService implements ICloudStorage {
  constructor(private readonly firebaseStorage: FirebaseStorageService) {}

  deleteFileFrom(pathSegment: string[]): Observable<void> {
    return new Observable((observer) => {
      this.firebaseStorage
        .deleteFileFrom(pathSegment)
        .then(() => observer.next())
        .catch((error) => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  getFileDownloadURL(storageRef: StorageReference): Observable<string> {
    return new Observable((observer) => {
      this.firebaseStorage
        .getFileDownloadURL(storageRef)
        .then((url) => observer.next(url))
        .catch((error) => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  uploadFileTo(
    pathSegment: string[],
    file: Blob | Uint8Array | ArrayBuffer | File
  ): Observable<UploadResult> {
    return new Observable((observer) => {
      this.firebaseStorage
        .uploadFileTo(pathSegment, file)
        .then((uploadResult) => observer.next(uploadResult))
        .catch((error) => observer.error(error))
        .finally(() => observer.complete());
    });
  }
}
