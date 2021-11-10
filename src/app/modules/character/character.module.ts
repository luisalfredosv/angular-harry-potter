import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CharacterPageComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule
  ]
})
export class CharacterModule { }
