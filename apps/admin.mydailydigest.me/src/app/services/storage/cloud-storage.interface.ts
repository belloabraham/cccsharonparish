
import { StorageReference, UploadResult } from '@angular/fire/storage';
import { Observable } from 'rxjs';

export interface ICloudStorage {
  /**
   * Deletes a file from the storage.
   * @param pathSegment - The path to the file to be deleted.
   */
  deleteFileFrom(pathSegment: string[]): Observable<void>;

  /**
   * Uploads a file to Cloud Storage.
   * @param path The path where the file will be stored in Cloud Storage.
   * @param file The file to be uploaded (Blob, File Uint8Array, or ArrayBuffer).
   * @param options (Optional) An object containing additional upload options like progress callbacks, completion handler, error handler, and metadata.
   */
  uploadFileTo(
    pathSegment: string[],
    file: Blob | File | Uint8Array | ArrayBuffer
  ): Observable<UploadResult>;

  getFileDownloadURL(storageRef: StorageReference): Observable<string>;
}