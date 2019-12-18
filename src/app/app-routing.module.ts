import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OtherformsComponent } from './otherforms/otherforms.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
      },
      {
    path:'login',
    component:LoginComponent
      },
  {
path:'otherforms',
component:OtherformsComponent
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
  { 
    path: 'reports', 
    loadChildren:"./reports/reports.module#ReportsModule"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
