import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffPageComponent } from './pages/staff-page/staff-page.component';


@NgModule({
  declarations: [
    StaffPageComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule
  ]
})
export class StaffModule { }
