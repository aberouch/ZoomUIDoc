import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ZoomPageTemplateComponent } from '@zoomui/page-template';
import { ZoomButtonComponent } from '@zoomui/button';
import { RaetButtonComponent } from './raet-button/raet-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ZoomPageTemplateComponent,
    ZoomButtonComponent,
    RaetButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    ZoomButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
