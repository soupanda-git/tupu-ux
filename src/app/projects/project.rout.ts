import { Routes } from "@angular/router";
import { ProjectContainerComponent } from "./project-container.component";
import { ProjectListComponent } from "./project-list.component";
import { ProjectComponent } from "./project.component";


export const projectRout : Routes = [
  {path:'', component: ProjectContainerComponent ,children:[
    {path: 'projects', component:ProjectListComponent },
    {path: 'projects/:id', component:ProjectComponent },
  ]}

]
