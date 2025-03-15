import { Injectable } from '@angular/core';
import {
  StorageReference,
} from '@angular/fire/storage';

@Injectable()
export class MockFirebaseStorageService {
  private mockStorage: Record<string, { content: any; url: string }> = {};

  deleteFileFrom(
    pathSegment: string[],
    fileNameWithExt: string
  ): Promise<void> {
    const path = [...pathSegment, fileNameWithExt].join('/');
    if (this.mockStorage[path]) {
      delete this.mockStorage[path];
    }
    return Promise.resolve();
  }

  uploadFileTo(
    pathSegment: string[],
    fileNameWithExt: string,
    file: Blob | Uint8Array | ArrayBuffer | File
  ): Promise<{ ref: StorageReference }> {
    const path = [...pathSegment, fileNameWithExt].join('/');
    this.mockStorage[path] = {
      content: file,
      url: `https://mockstorage.com/${path}`,
    };
    return Promise.resolve({ ref: { fullPath: path } as StorageReference });
  }

  getFileDownloadURL(storageRef: StorageReference): Promise<string> {
    const file = this.mockStorage[storageRef.fullPath];
    if (!file) {
      return Promise.reject(new Error('File not found'));
    }
    return Promise.resolve(file.url);
  }
}
