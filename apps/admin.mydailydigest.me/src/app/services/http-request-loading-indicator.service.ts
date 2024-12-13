import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Subject } from 'rxjs';
import { map, scan, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestLoadingIndicatorService {
  private requestSubject = new Subject<boolean>();

  isLoading = toSignal(
    this.requestSubject.asObservable().pipe(
      scan((activeRequests, isStarting) => {
        return isStarting ? activeRequests + 1 : activeRequests - 1;
      }, 0),
      startWith(0),
      map((activeRequests) => activeRequests > 0)
    )
  );

  showLoader() {
    this.requestSubject.next(true);
  }

  hideLoader() {
    this.requestSubject.next(false);
  }
}
