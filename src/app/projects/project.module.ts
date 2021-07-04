import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { projectRout } from './project.rout';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';
import { ProjectContainerComponent } from './project-container.component';
import { ProjectListComponent } from './project-list.component';
import { StoreModule } from '@ngrx/store';
import { projectReducer } from './state/project.reducer';



@NgModule({
  declarations: [
    ProjectComponent,
    ProjectContainerComponent,
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(projectRout),
    StoreModule.forFeature('projects', projectReducer)
  ]
})
export class ProjectModule { }
