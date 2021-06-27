import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TupuAppComponent } from './tupu-app.component';
import { WelcomeComponent } from './shared/welcome.component';


@NgModule({
  declarations: [
    TupuAppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TupuAppComponent]
})
export class AppModule { }
