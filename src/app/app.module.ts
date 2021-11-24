import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerInterceptor } from './shared/interceptors/spinner.interceptor';
import { HttpErrorInterceptor } from './shared/interceptors/httpError.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OverlayModule } from '@angular/cdk/overlay';
// import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    OverlayModule,
    // FlexLayoutModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
