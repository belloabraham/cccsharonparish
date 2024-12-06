import {
  BehaviorSubject,
  catchError,
  delayWhen,
  Observable,
  of,
  retryWhen,
  startWith,
  take,
  timer,
} from 'rxjs';

export const CONNECTION_STATE = {
  ONLINE: 'online',
  OFFLINE: 'offline',
};

export class ConnectionStateUtil {
  private deviceIsConnectedToTheInternet$ = new BehaviorSubject<boolean>(true);

  observeDeviceInternetConnectionState(
    pingDomain: string,
    maxRetries: number = 3,
    retryIntervalInSec: number = 2000,
    defaultState: boolean = true
  ) {
    window.addEventListener(CONNECTION_STATE.ONLINE, async () => {
      this.pingMyDomain(pingDomain)
        .pipe(
          startWith(defaultState),
          retryWhen((errors) =>
            errors.pipe(
              delayWhen(() => timer(retryIntervalInSec)),
              take(maxRetries)
            )
          ),
          catchError((err) => {
            console.error('Retries exhausted:', err.message);
            return of(false);
          })
        )
        .subscribe(this.deviceIsConnectedToTheInternet$);
    });

    window.addEventListener(CONNECTION_STATE.OFFLINE, () => {
      this.deviceIsConnectedToTheInternet$.next(false);
    });
    return this.deviceIsConnectedToTheInternet$;
  }

  private pingMyDomain(pingDomain: string): Observable<boolean> {
    return new Observable((observer) => {
      // Attempt to fetch the header of a resource from the app toot domain
      // The { method: 'HEAD', cache: 'no-store' }
      // options are used to ensure that no actual data is fetched and that the cache is ignored.
      fetch(pingDomain, {
        method: 'HEAD',
        cache: 'no-store',
      })
        .then(() => {
          observer.next(true);
        })
        .catch((error) => {
          observer.error(error);
        })
        .finally(() => {
          observer.complete();
        });
    });
  }
}
