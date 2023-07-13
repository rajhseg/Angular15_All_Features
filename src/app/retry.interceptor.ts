import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, retry, RetryConfig, timer } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RetryInterceptor implements HttpInterceptor {

  constructor() {}

  delayonError(error: HttpErrorResponse): Observable<number> {

    if (error.status >= 200) {
      return timer(1000);
    }

    throw error;
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let config: RetryConfig = { count: 2, delay: this.delayonError }
    return next.handle(request).pipe(retry(config));

  }
}
