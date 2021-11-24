import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartRoutingModule } from './start-routing.module';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    StartPageComponent
  ],
  imports: [
    CommonModule,
    StartRoutingModule,
    SharedModule,
  ]
})
export class StartModule { }
