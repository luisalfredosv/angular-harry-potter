import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { TableComponent } from './components/table/table.component';
import { RouterModule } from '@angular/router';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { AgePipe } from './pipe/age.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';

import { MaterialModule } from '../material/material.module';
import { AlertErrorComponent } from './components/alert-error/alert-error.component';

@NgModule({
  declarations: [
    MenuBarComponent,
    TableComponent,
    ImgBrokenDirective,
    AgePipe,
    SpinnerComponent,
    AlertErrorComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    MenuBarComponent,
    TableComponent,
    ImgBrokenDirective,
    AgePipe,
    SpinnerComponent,
    AlertErrorComponent,
  ],
})
export class SharedModule {}
