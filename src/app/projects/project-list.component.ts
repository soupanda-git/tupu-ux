import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProjectsService } from '../core/projects.service';
import { Project } from '../models/Project';
import { getShowProjectCode, State } from './state/project.reducer';
import * as ProjectActions from "./state/project.actions";

@Component({
  selector: 'tupu-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
 project: Project;
 projectList: Project[]=[];
 displayProjectCode: boolean = false;

  constructor(private store: Store<State>,private projectsService: ProjectsService ) {
    this.project = new Project();
  }
  checkChanged(): void{
    //this.displayProjectCode = !this.displayProjectCode;
    this.store.dispatch(ProjectActions.toggleShowProjectCode());
  }
  ngOnInit(): void {
    this.project.projectName = "test 123";
    this.projectList = this.projectsService.getProjects();
    this.store.select(getShowProjectCode).subscribe(
      showProjectCode => this.displayProjectCode = showProjectCode
    );
  }

}
