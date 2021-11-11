import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../start/start.module').then((m) => m.StartModule),
  },
  {
    path: 'students',
    loadChildren: () =>
      import('../student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'staff',
    loadChildren: () =>
      import('../staff/staff.module').then((m) => m.StaffModule),
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('../character/character.module').then((m) => m.CharacterModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
