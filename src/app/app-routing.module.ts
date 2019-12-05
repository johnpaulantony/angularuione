import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopnavComponent } from './topnav/topnav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OtherformsComponent } from './otherforms/otherforms.component';


const routes: Routes = [
  {
path:'otherforms',
component:OtherformsComponent
  },
  {
    path:'topnav',
    component:TopnavComponent
  },
  {
    path:'',
    component:DashboardComponent
  },
  { 
    path: 'attendance', 
    loadChildren:"./attendance/attendance.module#AttendanceModule"
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  
  { 
    path: 'coursetracking', 
    loadChildren:"./coursetracking/coursetracking.module#CoursetrackingModule"
  },
  { 
    path: 'student', 
    loadChildren:"./student/student.module#StudentModule"
  },{ 
    path: 'trainer', 
    loadChildren:"./trainer/trainer.module#TrainerModule"
  },
  { 
    path: 'batch', 
    loadChildren:"./batch/batch.module#BatchModule"
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
