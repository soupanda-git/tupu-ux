import { Routes } from "@angular/router";
import { ProjectListComponent } from "./projects/project-list.component";
import { ProjectComponent } from "./projects/project.component";
import { WelcomeComponent } from "./shared/welcome.component";
import { StakeholderListComponent } from "./stakeholders/stakeholder-list.component";
import { StakeholderComponent } from "./stakeholders/stakeholder.component";

export const appRouts: Routes = [
  {path: 'projects', component:ProjectListComponent },
  {path: 'projects/:id', component:ProjectComponent },
  {path: 'stakeholders', component: StakeholderListComponent },
  {path: 'stakeholders/:id', component: StakeholderComponent },
  {path: 'welcome', component: WelcomeComponent },
  {path: '', redirectTo: '/welcome', pathMatch: 'full' }
]
