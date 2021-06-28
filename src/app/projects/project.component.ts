import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/Project';

@Component({
  selector: 'tupu-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input()
  project: Project = new Project;
  projectName: string="";

  constructor() {

  }

  ngOnInit(): void {
    this.projectName = this.project.projectName;
  }

}
