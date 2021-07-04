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
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouts, {enableTracing:false}),
    ProjectModule,
    StakeholderModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([])
  ],
  declarations: [
    TupuAppComponent
  ],
  providers: [],
  bootstrap: [TupuAppComponent]
})
export class AppModule { }
