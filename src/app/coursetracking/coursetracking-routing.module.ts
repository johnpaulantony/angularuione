import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewcComponent } from './viewc/viewc.component';
import { AddComponent } from './add/add.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddsubjectComponent } from './addsubject/addsubject.component';
import { AddtopicComponent } from './addtopic/addtopic.component';


const routes: Routes = [{
  path:'viewc',
  component:ViewcComponent
},
{
  path:'add',
  component:AddComponent
},
{
  path:'addcourse',
  component:AddcourseComponent
},
{
  path:'addsubject',
  component:AddsubjectComponent
},
{
  path:'addtopic',
  component:AddtopicComponent
}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursetrackingRoutingModule { }
function newFunction(): string {
  return 'viewc';
}

