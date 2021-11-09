import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IStaff } from 'src/app/shared/interfaces/staff.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {}

  getStaff$(): Observable<IStaff[]> {
    return this.http.get(`${this.URL}/characters/staff`).pipe(map((data: any) => data));
  }
}
