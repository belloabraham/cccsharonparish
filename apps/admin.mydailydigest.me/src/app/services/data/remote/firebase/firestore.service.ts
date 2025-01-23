import { inject, Injectable } from '@angular/core';
import {
  FieldPath,
  Firestore,
  FirestoreError,
  QueryConstraint,
  collection,
  collectionGroup,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  writeBatch,
} from '@angular/fire/firestore';
import { FIRESTORE_ERROR_CODES } from './error-codes';
import {
  documentDataSnapshotToType,
  querySnapshotToArrayOfType,
} from './utils';
import { Observable } from 'rxjs';
import { IRemoteData } from '../remote-data.interface';

@Injectable()
export class FirestoreService implements IRemoteData {
  private firestore = inject(Firestore);

  getALiveDocumentData<T>(
    path: string,
    pathSegment: string[],
    onNext: (data: T) => void,
    retryTimeout: number = 2000
  ) {
    const ref = doc(this.firestore, path, ...pathSegment);
    const unsubscribe = onSnapshot(ref, {
      next: (docSnapshot) => {
        if (docSnapshot.exists()) {
          const docData = docSnapshot.data();
          const json = JSON.stringify(docData);
          const data: T = JSON.parse(json);
          onNext(data);
        }
      },
      error: (error: FirestoreError) => {
        const code = error.code.toString();
        if (
          code !== FIRESTORE_ERROR_CODES.PERMISSION_DENIED &&
          code !== FIRESTORE_ERROR_CODES.UNAUTHENTICATED
        ) {
          setTimeout(() => {
            this.getALiveDocumentData(path, pathSegment, onNext);
          }, retryTimeout);
        }
      },
    });
    return unsubscribe;
  }

  getLiveListOfDocumentData<T>(
    path: string,
    pathSegment: string[],
    onNext: (data: T[]) => void,
    onError: (errorCode: string) => void,
    retryTimeout: number
  ) {
    const q = query(collection(this.firestore, path, ...pathSegment));

    const unsubscribe = onSnapshot(q, {
      next: (querySnapShot) => {
        const dataArray: T[] = [];
        querySnapShot.forEach((queryDoc) => {
          if (queryDoc.exists()) {
            const docData = queryDoc.data();
            const json = JSON.stringify(docData);
            const data: T = JSON.parse(json);
            dataArray.push(data);
          }
        });
        onNext(dataArray);
      },
      error: (error: FirestoreError) => {
        const code = error.code.toString();
        if (
          code !== FIRESTORE_ERROR_CODES.PERMISSION_DENIED &&
          code !== FIRESTORE_ERROR_CODES.UNAUTHENTICATED
        ) {
          setTimeout(() => {
            this.getALiveDocumentData(path, pathSegment, onNext);
          }, retryTimeout);
        } else {
          onError(code);
        }
      },
    });
    return unsubscribe;
  }

  getLiveListOfDocumentDataWithQuery<T>(
    path: string,
    pathSegment: string[],
    queryConstraint: QueryConstraint[],
    onNext: (data: T[], arrayOfDocIds: string[]) => void,
    onError: (errorCode: string) => void
  ) {
    const q = query(
      collection(this.firestore, path, ...pathSegment),
      ...queryConstraint
    );

    const unsubscribe = onSnapshot(q, {
      next: (querySnapShot) => {
        const dataArray: T[] = [];
        const arrayOfIds: string[] = [];
        querySnapShot.forEach((queryDoc) => {
          if (queryDoc.exists()) {
            const docData = queryDoc.data();
            const json = JSON.stringify(docData);
            const data: T = JSON.parse(json);
            dataArray.push(data);
            arrayOfIds.push(queryDoc.id);
          }
        });
        onNext(dataArray, arrayOfIds);
      },
      error: (error: FirestoreError) => {
        const errorCode = error.code.toString();
        onError(errorCode);
      },
    });
    return unsubscribe;
  }

  getListOfDocumentDataWithQueryAsync<T>(
    databaseCollection: string,
    pathSegment: string[],
    queryConstraint: QueryConstraint[]
  ): Observable<T[]> {
    const q = query(
      collection(this.firestore, databaseCollection, ...pathSegment),
      ...queryConstraint
    );
    return new Observable((observer) => {
      getDocs(q)
        .then((querySnapshot) =>
          observer.next(querySnapshotToArrayOfType<T>(querySnapshot))
        )
        .catch((error) => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  getListDocumentDataWithQueryFromCollectionGroupAsync<T>(
    childCollection: string,
    queryConstraint: QueryConstraint[]
  ): Observable<T[]> {
    const q = query(
      collectionGroup(this.firestore, childCollection),
      ...queryConstraint
    );
    return new Observable((observer) => {
      getDocs(q)
        .then((querySnapshot) =>
          observer.next(querySnapshotToArrayOfType<T>(querySnapshot))
        )
        .catch((error) => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  getAListOfDocData<T>(path: string, pathSegment: string[]): Observable<T[]> {
    const q = query(collection(this.firestore, path, ...pathSegment));
    return new Observable((observer) => {
      getDocs(q)
        .then((querySnapshot) =>
          observer.next(querySnapshotToArrayOfType<T>(querySnapshot))
        )
        .catch((error) => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  getADocumentDataAsync<T>(
    collection: string,
    pathSegment: string[]
  ): Observable<T | null> {
    const docRef = doc(this.firestore, collection, ...pathSegment);
    return new Observable((observer) => {
      getDoc(docRef)
        .then((docSnapShot) =>
          observer.next(documentDataSnapshotToType<T>(docSnapShot))
        )
        .catch((error) => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  addADocumentDataTo<T extends Record<string, any>>(
    collection: string,
    pathSegment: string[],
    data: T,
    merge = { merge: true }
  ): Observable<T> {
    const docRef = doc(this.firestore, collection, ...pathSegment);
    return new Observable((observer) => {
      setDoc(docRef, data, merge)
        .then(() => observer.next(data))
        .catch((error) => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  deleteAllDocumentDataFrom(
    collection: string,
    pathSegment: string[],
    docIds: string[]
  ): Observable<void> {
    const batch = writeBatch(this.firestore);
    for (let index = 0; index < docIds.length; index++) {
      const pathSegmentWithId = pathSegment.concat([docIds[index]]);
      const docRef = doc(this.firestore, collection, ...pathSegmentWithId);
      batch.delete(docRef);
    }

    return new Observable((observer) => {
      batch
        .commit()
        .then(() => observer.next())
        .catch((error) => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  deleteADocumentFrom(
    collection: string,
    pathSegment: string[]
  ): Observable<void> {
    const docRef = doc(this.firestore, collection, ...pathSegment);
    return new Observable((observer) => {
      deleteDoc(docRef)
        .then(() => observer.next())
        .catch((error) => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  updateADocumentDataIn(
    collection: string,
    pathSegment: string[],
    map: Record<string, any>
  ): Observable<void> {
    const docRef = doc(this.firestore, collection, ...pathSegment);
    return new Observable((observer) => {
      updateDoc(docRef, map)
        .then(() => observer.next())
        .catch((error) => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  updateADocumentFieldIn(
    collection: string,
    pathSegment: string[],
    field: string | FieldPath,
    fieldValue: unknown
  ): Observable<void> {
    const docRef = doc(this.firestore, collection, ...pathSegment);
    return new Observable((observer) => {
      updateDoc(docRef, field, fieldValue)
        .then(() => observer.next())
        .catch((error) => observer.error(error))
        .finally(() => observer.complete());
    });
  }

  updateAllDocumentDataIn<T>(
    collection: string,
    pathSegment: string[],
    field: string | FieldPath,
    fieldValue: unknown,
    docIds: string[]
  ): Observable<void> {
    const batch = writeBatch(this.firestore);
    for (let index = 0; index < docIds.length; index++) {
      const pathSegmentWithId = pathSegment.concat([docIds[index]]);
      const docRef = doc(this.firestore, collection, ...pathSegmentWithId);
      batch.update(docRef, field, fieldValue);
    }

    return new Observable((observer) => {
      batch
        .commit()
        .then(() => observer.next())
        .catch((error) => observer.error(error))
        .finally(() => observer.complete());
    });
  }
}
