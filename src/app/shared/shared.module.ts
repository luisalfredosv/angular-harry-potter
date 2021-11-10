import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { TableComponent } from './components/table/table.component';
import { RouterModule } from '@angular/router';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { AgePipe } from './pipe/age.pipe';

@NgModule({
  declarations: [
    MenuBarComponent,
    TableComponent,
    ImgBrokenDirective,
    AgePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuBarComponent,
    TableComponent,
    ImgBrokenDirective,
    AgePipe
  ]
})
export class SharedModule { }
