import { inject, Injectable } from '@angular/core';
import {
  getDownloadURL,
  ref,
  deleteObject,
  Storage,
  uploadBytes,
  StorageReference,
} from '@angular/fire/storage';

@Injectable()
export class FirebaseStorageService {
  private storage = inject(Storage);

  deleteFileFrom(pathSegment: string[], fileNameWithExt: string) {
    const path = [...pathSegment, fileNameWithExt].join('/');
    const storageRef = ref(this.storage, path);
    return deleteObject(storageRef);
  }

  uploadFileTo(
    pathSegment: string[],
    fileNameWithExt: string,
    file: Blob | Uint8Array | ArrayBuffer | File
  ) {
    const path = [...pathSegment, fileNameWithExt].join('/');
    const storageRef = ref(this.storage, path);
    return uploadBytes(storageRef, file);
  }

  getFileDownloadURL(storageRef: StorageReference) {
    return getDownloadURL(storageRef);
  }
}
