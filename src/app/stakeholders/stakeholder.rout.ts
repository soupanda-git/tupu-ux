import { Routes } from "@angular/router";
import { StakeholderContainerComponent } from "./stakeholder-container.component";
import { StakeholderListComponent } from "./stakeholder-list.component";
import { StakeholderComponent } from "./stakeholder.component";

export const stakeholderRout : Routes = [
  {path:'', component: StakeholderContainerComponent ,children:[
    {path: 'stakeholders', component: StakeholderListComponent},
    {path: 'stakeholders/:id', component: StakeholderComponent},
  ]}

]
