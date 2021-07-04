import { Injectable } from '@angular/core';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects(){
    let projects: Project[]=[
        {projectName:'Project1',
      id:'C001',
      startDate: new Date('03-07-2021')},
      {projectName:'Project2',
      id:'C002',
      startDate: new Date('03-07-2021')},
      {projectName:'Project3',
      id:'C003',
      startDate: new Date('03-07-2021')}
    ];

    return projects;
  }
}
