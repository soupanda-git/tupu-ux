import { Component, OnInit } from '@angular/core';
import { Project } from '../models/Project';

@Component({
  selector: 'tupu-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
 project: Project;
  constructor() {
    this.project = new Project();
  }

  ngOnInit(): void {
    this.project.projectName = "test 123";
  }

}
