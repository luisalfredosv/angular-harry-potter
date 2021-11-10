import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EHouse } from 'src/app/shared/enum/house.enum';
import { ICharacter } from 'src/app/shared/interfaces/character.interface';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css'],
})
export class CharacterPageComponent implements OnInit {
  constructor(private characterService: CharacterService) {}

  // house$: Observable<string> = of('');
  listCharacters$: Observable<any[]> = of([]);

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    const house: EHouse = EHouse.GRYFFINDOR;
    this.listCharacters$ = this.characterService.getCharacter$(house);
  }
}
