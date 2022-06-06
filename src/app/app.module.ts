import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import es_CL from '@angular/common/locales/es-CL';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

registerLocaleData(es_CL);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CL' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
