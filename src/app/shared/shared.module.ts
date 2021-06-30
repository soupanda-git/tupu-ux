import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';



@NgModule({
  declarations: [
    NavComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    NavComponent
  ]
})
export class SharedModule { }
