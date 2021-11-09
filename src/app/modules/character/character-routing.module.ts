import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterPageComponent } from './pages/character-page/character-page.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
