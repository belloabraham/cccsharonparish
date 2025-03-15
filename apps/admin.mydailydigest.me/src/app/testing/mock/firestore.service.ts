import { Injectable } from '@angular/core';
import {
  DocumentData,
  DocumentReference,
  FieldPath,
  QueryConstraint,
  Transaction,
  TransactionOptions,
  Unsubscribe,
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { IRemoteData } from '../../services';

@Injectable()
/* eslint-disable */
export class MockFirestoreService implements IRemoteData {
  private mockDatabase: Record<string, any> = {};

  getALiveDocumentData<T>(
    collection: string,
    pathSegment: string[],
    onNext: (data: T) => void
  ): () => void {
    const key = `${collection}/${pathSegment.join('/')}`;
    onNext(this.mockDatabase[key] || null);
    return () => {}; // Mock unsubscribe function
  }

  getDocRef(
    collection: string,
    pathSegment: string[]
  ): DocumentReference<DocumentData, DocumentData> {
    return {} as DocumentReference<DocumentData, DocumentData>; // Mocked empty object
  }

  runTransaction(
    updateFunction: (transaction: Transaction) => Promise<void>,
    options?: TransactionOptions
  ): Promise<void> {
    return Promise.resolve(); // Mock a resolved transaction
  }

  getLiveListOfDocumentDataWithQuery<T>(
    collection: string,
    pathSegment: string[],
    queryConstraint: QueryConstraint[],
    onNext: (data: T[], arrayOfDocIds: string[]) => void,
    onError: (errorCode: string) => void
  ): Unsubscribe {
    const key = `${collection}/${pathSegment.join('/')}`;
    const mockData = this.mockDatabase[key] || [];
    onNext(
      mockData,
      mockData.map((_: any, index: number) => `docId-${index}`)
    );
    return () => {}; // Mock unsubscribe function
  }

  getLiveListOfDocumentData<T>(
    collection: string,
    pathSegment: string[],
    onNext: (data: T[]) => void,
    onError: (errorCode: string) => void
  ): Unsubscribe {
    const key = `${collection}/${pathSegment.join('/')}`;
    const mockData = this.mockDatabase[key] || [];
    onNext(mockData);
    return () => {}; // Mock unsubscribe function
  }

  getListOfDocumentDataWithQueryAsync<T>(
    databaseCollection: string,
    pathSegment: string[],
    queryConstraint: QueryConstraint[]
  ): Observable<T[]> {
    return of(
      this.mockDatabase[`${databaseCollection}/${pathSegment.join('/')}`] || []
    );
  }

  getListDocumentDataWithQueryFromCollectionGroupAsync<T>(
    childCollection: string,
    queryConstraint: QueryConstraint[]
  ): Observable<T[]> {
    return of([]); // Return an empty array for testing purposes
  }

  getAListOfDocData<T>(
    collection: string,
    pathSegment: string[]
  ): Observable<T[]> {
    return of(
      this.mockDatabase[`${collection}/${pathSegment.join('/')}`] || []
    );
  }

  getADocumentData<T>(
    collection: string,
    pathSegment: string[]
  ): Observable<T | null> {
    return of(
      this.mockDatabase[`${collection}/${pathSegment.join('/')}`] || null
    );
  }

  addADocumentDataTo<T extends Record<string, any>>(
    collection: string,
    pathSegment: string[],
    data: T
  ): Observable<T> {
    const key = `${collection}/${pathSegment.join('/')}`;
    this.mockDatabase[key] = data;
    return of(data);
  }

  deleteAllDocumentDataFrom(
    collection: string,
    pathSegment: string[],
    docIds: string[]
  ): Observable<void> {
    docIds.forEach(
      (id) =>
        delete this.mockDatabase[`${collection}/${pathSegment.join('/')}/${id}`]
    );
    return of();
  }

  deleteADocumentFrom(
    collection: string,
    pathSegment: string[]
  ): Observable<void> {
    delete this.mockDatabase[`${collection}/${pathSegment.join('/')}`];
    return of();
  }

  updateADocumentDataIn(
    collection: string,
    pathSegment: string[],
    map: Record<string, any>
  ): Observable<void> {
    const key = `${collection}/${pathSegment.join('/')}`;
    this.mockDatabase[key] = { ...(this.mockDatabase[key] || {}), ...map };
    return of();
  }

  updateADocumentFieldIn(
    collection: string,
    pathSegment: string[],
    field: string | FieldPath,
    fieldValue: unknown
  ): Observable<void> {
    const key = `${collection}/${pathSegment.join('/')}`;
    if (!this.mockDatabase[key]) this.mockDatabase[key] = {};
    this.mockDatabase[key][field as string] = fieldValue;
    return of();
  }

  updateAllDocumentDataIn(
    collection: string,
    pathSegment: string[],
    field: string | FieldPath,
    fieldValue: unknown,
    docIds: string[]
  ): Observable<void> {
    docIds.forEach((id) => {
      const key = `${collection}/${pathSegment.join('/')}/${id}`;
      if (!this.mockDatabase[key]) this.mockDatabase[key] = {};
      this.mockDatabase[key][field as string] = fieldValue;
    });
    return of();
  }
}
