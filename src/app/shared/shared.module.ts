import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { TableComponent } from './components/table/table.component';
import { RouterModule } from '@angular/router';
import { ImgBrokenDirective } from './directives/img-broken.directive';

@NgModule({
  declarations: [
    MenuBarComponent,
    TableComponent,
    ImgBrokenDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuBarComponent,
    TableComponent,
    ImgBrokenDirective
  ]
})
export class SharedModule { }
