import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IStudent } from 'src/app/shared/interfaces/student.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  private URL = environment.api;

  getStudents$(): Observable<IStudent[]> {
    return this.http
      .get(`${this.URL}/characters/students`)
      .pipe(map((data: any) => data));
  }
}
