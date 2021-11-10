import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EHouse } from 'src/app/shared/enum/house.enum';
import { ICharacter } from 'src/app/shared/interfaces/character.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  private URL = environment.api;

  getCharacter$(house: EHouse): Observable<ICharacter[]> {
    return this.http
      .get(`${this.URL}/characters/house/${house}`)
      .pipe(map((data: any) => data));
  }
}
