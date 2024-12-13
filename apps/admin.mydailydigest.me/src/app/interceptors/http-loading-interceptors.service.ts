import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { HttpRequestLoadingIndicatorService } from '../services/http-request-loading-indicator.service';

@Injectable()
export class HttpLoadingRequestInterceptorsService implements HttpInterceptor {
  constructor(
    private httpRequestLoadingIndicatorService: HttpRequestLoadingIndicatorService
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
