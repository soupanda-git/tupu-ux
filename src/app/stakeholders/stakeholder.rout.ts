import { Routes } from "@angular/router";
import { StakeholderListComponent } from "./stakeholder-list.component";
import { StakeholderComponent } from "./stakeholder.component";

export const stakeholderRout : Routes = [
  {path: 'stakeholders', component: StakeholderListComponent},
  {path: 'stakeholders/:id', component: StakeholderComponent},
]
