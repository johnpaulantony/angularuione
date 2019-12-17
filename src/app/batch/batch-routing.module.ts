import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbComponent } from './addb/addb.component';
import { ViewbComponent } from './viewb/viewb.component';
import { AssignstudentComponent } from './assignstudent/assignstudent.component';
import { StudentupdationComponent } from './studentupdation/studentupdation.component';


const routes: Routes = [
  {
    path:'addb',
    component:AddbComponent
  },
  {
    path:'viewb',
    component:ViewbComponent
  },
  {
    path:'assignstudent',
  component:AssignstudentComponent
  },
  {
    path:'studentupdation',
    component:StudentupdationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchRoutingModule { }
