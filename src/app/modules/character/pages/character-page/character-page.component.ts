import { Component, OnInit } from '@angular/core';
import { MatOptionSelectionChange } from '@angular/material/core';
import { Observable, of } from 'rxjs';
import { EHouse } from 'src/app/shared/enum/house.enum';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css'],
})
export class CharacterPageComponent implements OnInit {
  constructor(private characterService: CharacterService) {}

  listCharacters$: Observable<any> = of([]);
  loading: boolean = false;
  listHouse: {
    name: string;
  }[] = [
    {
      name: 'slytherin',
    },
    {
      name: 'gryffindor',
    },
    {
      name: 'ravenclaw',
    },
    {
      name: 'hufflepuff',
    },
  ];

  ngOnInit(): void {
  }

  getCharacters(house: EHouse): void {
    this.listCharacters$ = this.characterService.getCharacter$(house);
  }

  onChange(select: MatOptionSelectionChange) {
    const house : EHouse = select.source.value
    if(house){
      this.loading = true;
      this.getCharacters(house)
    }else{
      this.listCharacters$ = of([])
    }
    this.loading = false;

  }
}
