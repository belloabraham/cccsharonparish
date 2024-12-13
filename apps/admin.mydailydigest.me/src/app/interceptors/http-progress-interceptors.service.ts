import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { HttpRequestProgressIndicatorService } from '../services';

@Injectable()
export class HttpProgressInterceptorService implements HttpInterceptor {
  constructor(
    private httpRequestLoadingIndicatorService: HttpRequestProgressIndicatorService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.httpRequestLoadingIndicatorService.showLoader();

    return next.handle(req).pipe(
      finalize(() => {
        this.httpRequestLoadingIndicatorService.hideLoader();
      })
    );
  }
}
