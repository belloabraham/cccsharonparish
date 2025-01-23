import { Observable, mergeMap, throwError, timer } from 'rxjs';
import { FIRESTORE_ERROR_CODES } from './firebase/error-codes';

export const firestoreRetryStrategy =
  (
    maxRetryAttempts: number = 3,
    scalingDuration: number = 1000,
    excludedStatusCodes: string[] = [
      FIRESTORE_ERROR_CODES.UNAUTHENTICATED,
      FIRESTORE_ERROR_CODES.PERMISSION_DENIED,
    ]
  ) =>
  (attempts: Observable<any>) => {
    return attempts.pipe(
      mergeMap((error, i) => {
        const retryAttempt = i + 1;
        // if maximum number of retries have been met
        // or response is a status code we don't wish to retry, throw error
        if (
          retryAttempt > maxRetryAttempts ||
          excludedStatusCodes.find((e) => e === error.status)
        ) {
          return throwError(error);
        }
        console.info(
          `Attempt ${retryAttempt}: retrying in ${
            retryAttempt * scalingDuration
          }ms`
        );
        // retry after 1s, 2s, etc...
        return timer(retryAttempt * scalingDuration);
      })
    );
  };
