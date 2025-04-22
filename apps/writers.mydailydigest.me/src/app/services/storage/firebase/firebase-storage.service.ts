import { inject, Injectable } from '@angular/core';
import {
  getDownloadURL,
  ref,
  deleteObject,
  Storage,
  uploadBytes,
  StorageReference,
  UploadResult,
  getBlob,
} from '@angular/fire/storage';

@Injectable()
export class FirebaseStorageService {
  private storage = inject(Storage);

  deleteFileFrom(pathSegment: string[], fileNameWithExt: string) {
    const path = [...pathSegment, fileNameWithExt].join('/');
    const storageRef = ref(this.storage, path);
    return deleteObject(storageRef);
  }

  /**
   * Uploads a file to Firebase Storage.
   *
   * @param file - The file to upload. Can be a Blob, Uint8Array, ArrayBuffer, or File.
   * @param pathsToFile - Optional array of path segments that will be joined to form the full path.
   * @param pathToFile - Optional full path to the file including the filename and extension.
   *
   * @returns A Promise that resolves with the upload result (UploadResult) from Firebase.
   *
   * @throws If neither `pathsToFile` nor `pathToFile` is provided, the path will be undefined and an error may occur.
   *
   * @example
   * // Upload using path segments
   * uploadFileTo(fileBlob, ['images', 'draft', 'fileName.png']);
   *
   * @example
   * // Upload using full path
   * uploadFileTo(fileBlob, null, 'images/draft/fileName.png');
   */
  uploadFileTo(
    file: Blob | Uint8Array | ArrayBuffer | File,
    pathsToFile: string[] | null,
    pathToFile?: string
  ) {
    const path = pathsToFile ? pathsToFile.join('/') : pathToFile;
    if (!path) {
      throw new Error(
        'Invalid file path: Either pathsToFile or pathToFile must be provided.'
      );
    }
    const storageRef = ref(this.storage, path);
    return uploadBytes(storageRef, file);
  }

  getFileDownloadURL(storageRef: StorageReference) {
    return getDownloadURL(storageRef);
  }

  async copyFileTo(
    oldPathToFile: string,
    newPathToFile: string
  ): Promise<UploadResult> {
    const oldStorageRef = ref(this.storage, oldPathToFile);
    const blob = await getBlob(oldStorageRef);
    return this.uploadFileTo(blob, null, newPathToFile);
  }

  async copyFileFromUrlTo(
    url: string,
    newPathToFile: string
  ): Promise<UploadResult> {
    const response = await fetch(url);
    const blob = await response.blob();
    return this.uploadFileTo(blob, null, newPathToFile);
  }
}
