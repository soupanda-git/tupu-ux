import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { stakeholderRout } from './stakeholder.rout';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(stakeholderRout)
  ],
  declarations: []
})
export class StakeholderModule { }
