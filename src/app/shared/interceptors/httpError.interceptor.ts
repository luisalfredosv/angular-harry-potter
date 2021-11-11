import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { HttpErrorService } from '../services/http-error.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private httpErrorService: HttpErrorService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error) => {
        let errorMessage = '';
        if (error instanceof ErrorEvent) {
          errorMessage = `Client-side error: ${error.error.message}`;
        } else {
          errorMessage = `Server-side error: ${error.status} ${error.message}`;
        }
        this.httpErrorService.showError();
        console.error(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
