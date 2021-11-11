import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorService {
  isError$ = new Subject<boolean>();

  constructor() {}

  showError() {
    this.isError$.next(true);
  }
}
