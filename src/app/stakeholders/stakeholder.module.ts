import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { stakeholderRout } from './stakeholder.rout';
import { StakeholderContainerComponent } from './stakeholder-container.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(stakeholderRout)
  ],
  declarations: [
    StakeholderContainerComponent
  ]
})
export class StakeholderModule { }
