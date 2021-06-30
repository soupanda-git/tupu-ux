import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TupuAppComponent } from './tupu-app.component';
import { WelcomeComponent } from './shared/welcome.component';
import { ProjectListComponent } from './projects/project-list.component';
import { ProjectComponent } from './projects/project.component';
import { StakeholderComponent } from './stakeholders/stakeholder.component';
import { StakeholderListComponent } from './stakeholders/stakeholder-list.component';
import { appRouts } from './routs';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProjectContainerComponent } from './projects/project-container.component';
import { ProjectModule } from './projects/project.module';
import { SharedModule } from './shared/shared.module';
import { StakeholderModule } from './stakeholders/stakeholder.module';



@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouts, {enableTracing:true}),
    ProjectModule,
    StakeholderModule
  ],
  declarations: [
    TupuAppComponent
  ],
  providers: [],
  bootstrap: [TupuAppComponent]
})
export class AppModule { }
