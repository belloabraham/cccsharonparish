import {
  FieldPath,
  QueryConstraint,
  Unsubscribe,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

/**
 * FirestoreService Interface
 * This service provides methods for interacting with Firestore database.
 */
export interface IRemoteData {
  /**
   * Retrieves live data from a specific document.
   * @param collection The path to the document.
   * @param pathSegment Array of path segments.
   * @param onNext Callback function to handle the retrieved data.
   * @param retryTimeout Timeout duration for retrying in case of errors.
   * @returns Function to unsubscribe from the snapshot listener.
   */
  getALiveDocumentData<T>(
    collection: string,
    pathSegment: string[],
    onNext: (data: T) => void,
    retryTimeout?: number
  ): () => void;

  /**
   * Retrieves live data from a list of documents based on provided query constraints.
   * @param collection The path to the collection.
   * @param pathSegment Array of path segments.
   * @param queryConstraint Array of query constraints.
   * @param onNext Callback function to handle the retrieved data.
   * @param onError Callback function to handle errors.
   * @returns Function to unsubscribe from the snapshot listener.
   */
  getLiveListOfDocumentDataWithQuery<T>(
    collection: string,
    pathSegment: string[],
    queryConstraint: QueryConstraint[],
    onNext: (data: T[], arrayOfDocIds: string[]) => void,
    onError: (errorCode: string) => void
  ): Unsubscribe;

  /**
   * Retrieves live data from a list of documents based on provided query constraints.
   * @param collection The path to the collection.
   * @param pathSegment Array of path segments.
   * @param onNext Callback function to handle the retrieved data.
   * @param onError Callback function to handle errors.
   * @param retryTimeout How long it takes in milli sec to retry.
   * @returns Function to unsubscribe from the snapshot listener.
   */
  getLiveListOfDocumentData<T>(
    collection: string,
    pathSegment: string[],
    onNext: (data: T[]) => void,
    onError: (errorCode: string) => void,
    retryTimeout: number
  ): Unsubscribe;

  /**
   * Retrieves a list of document data based on provided query constraints.
   * @param databaseCollection The collection name.
   * @param pathSegment Array of path segments.
   * @param queryConstraint Array of query constraints.
   * @returns A observable that resolves to an array of document data.
   */
  getListOfDocumentDataWithQueryAsync<T>(
    databaseCollection: string,
    pathSegment: string[],
    queryConstraint: QueryConstraint[]
  ): Observable<T[]>;

  /**
   * Retrieves a list of document data from a collection group based on provided query constraints.
   * @param childCollection The name of the child collection.
   * @param queryConstraint Array of query constraints.
   * @returns A observable that resolves to an array of document data.
   */
  getListDocumentDataWithQueryFromCollectionGroupAsync<T>(
    childCollection: string,
    queryConstraint: QueryConstraint[]
  ): Observable<T[]>;

  /**
   * Retrieves a list of document data from a collection.
   * @param collection The path to the collection.
   * @param pathSegment Array of path segments.
   * @returns A observable that resolves to an array of document data.
   */
  getAListOfDocData<T>(collection: string, pathSegment: string[]): Observable<T[]>;

  /**
   * Retrieves a document's data asynchronously.
   * @param collection The path to the document.
   * @param pathSegment Array of path segments.
   * @returns A observable that resolves to the document data or null if not found.
   */
  getADocumentDataAsync<T>(
    collection: string,
    pathSegment: string[]
  ): Observable<T | null>;

  /**
   * Adds a document data to a collection.
   * @param collection The name of the collection.
   * @param pathSegment Array of path segments.
   * @param data The data to be added.
   * @param merge Optional parameter to merge the data.
   * @returns A observable that resolves once the operation is completed.
   */
  addADocumentDataTo<T extends Record<string, any>>(
    collection: string,
    pathSegment: string[],
    data: T,
    merge?: { merge: boolean }
  ): Observable<T>;

  /**
   * Deletes all documents from a collection.
   * @param collection The name of the collection.
   * @param pathSegment Array of path segments.
   * @param docIds Array of document IDs to be deleted.
   * @returns A observable that resolves once the operation is completed.
   */
  deleteAllDocumentDataFrom(
    collection: string,
    pathSegment: string[],
    docIds: string[]
  ): Observable<void>;

  /**
   * Deletes a document from a collection.
   * @param collection The name of the collection.
   * @param pathSegment Array of path segments.
   * @returns A observable that resolves once the operation is completed.
   */
  deleteADocumentFrom(collection: string, pathSegment: string[]): Observable<void>;

  /**
   * Updates a document's data in a collection.
   * @param collection The name of the collection.
   * @param pathSegment Array of path segments.
   * @param map The data to be updated.
   * @returns A observable that resolves once the operation is completed.
   */
  updateADocumentDataIn(
    collection: string,
    pathSegment: string[],
    map: Record<string, any>
  ): Observable<void>;

  /**
   * Updates a document's field in a collection.
   * @param collection The name of the collection.
   * @param pathSegment Array of path segments.
   * @param field The field to be updated.
   * @param fieldValue The value to set for the field.
   * @returns A observable that resolves once the operation is completed.
   */
  updateADocumentFieldIn(
    collection: string,
    pathSegment: string[],
    field: string | FieldPath,
    fieldValue: unknown
  ): Observable<void>;

  /**
   * Updates all documents' data in a collection.
   * @param path The path to the collection.
   * @param pathSegment Array of path segments.
   * @param field The field to be updated.
   * @param fieldValue The value to set for the field.
   * @param docIds Array of document IDs to be updated.
   * @returns A observable that resolves once the operation is completed.
   */
  updateAllDocumentDataIn<T>(
    collection: string,
    pathSegment: string[],
    field: string | FieldPath,
    fieldValue: unknown,
    docIds: string[]
  ): Observable<void>;
}
