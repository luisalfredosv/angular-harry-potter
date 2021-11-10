import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StudentPageComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
