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
    onNext: (type: T) => void,
    retryTimeout: number = 2000
  ) {
    const ref = doc(this.firestore, path, ...pathSegment);
    const unsubscribe = onSnapshot(ref, {
      next: (docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          const json = JSON.stringify(data);
          const type: T = JSON.parse(json);
          onNext(type);
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
    onNext: (type: T[]) => void,
    onError: (errorCode: string) => void,
    retryTimeout: number
  ) {
    const q = query(collection(this.firestore, path, ...pathSegment));

    const unsubscribe = onSnapshot(q, {
      next: (querySnapShot) => {
        const dataArray: T[] = [];
        querySnapShot.forEach((queryDoc) => {
          if (queryDoc.exists()) {
            const data = queryDoc.data();
            const json = JSON.stringify(data);
            const type: T = JSON.parse(json);
            dataArray.push(type);
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
    onNext: (type: T[], arrayOfDocIds: string[]) => void,
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
            const data = queryDoc.data();
            const json = JSON.stringify(data);
            const type: T = JSON.parse(json);
            dataArray.push(type);
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
        .catch((error) => observer.next(error))
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
        .catch((error) => observer.next(error))
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
        .catch((error) => observer.next(error))
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
        .catch((error) => observer.next(error))
        .finally(() => observer.complete());
    });
  }

  addADocumentDataTo(
    collection: string,
    pathSegment: string[],
    type: any,
    merge = { merge: true }
  ): Observable<void> {
    const docRef = doc(this.firestore, collection, ...pathSegment);
    return new Observable((observer) => {
      setDoc(docRef, type, merge)
        .then(() => observer.next())
        .catch((error) => observer.next(error))
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
        .catch((error) => observer.next(error))
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
        .catch((error) => observer.next(error))
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
        .catch((error) => observer.next(error))
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
        .catch((error) => observer.next(error))
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
        .catch((error) => observer.next(error))
        .finally(() => observer.complete());
    });
  }
}
