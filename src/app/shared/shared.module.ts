import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { TableComponent } from './components/table/table.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MenuBarComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuBarComponent,
    TableComponent
  ]
})
export class SharedModule { }
