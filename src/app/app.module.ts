import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TupuAppComponent } from './tupu-app.component';
import { WelcomeComponent } from './shared/welcome.component';
import { ProjectListComponent } from './projects/project-list.component';
import { ProjectComponent } from './projects/project.component';
import { TopNavComponent } from './nav/top-nav.component';
import { StakeholderComponent } from './stakeholders/stakeholder.component';
import { StakeholderListComponent } from './stakeholders/stakeholder-list.component';
import { appRouts } from './routs';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouts)
  ],
  declarations: [
    TupuAppComponent,
    WelcomeComponent,
    ProjectListComponent,
    ProjectComponent,
    TopNavComponent,
    StakeholderComponent,
    StakeholderListComponent
  ],
  providers: [],
  bootstrap: [TupuAppComponent]
})
export class AppModule { }
