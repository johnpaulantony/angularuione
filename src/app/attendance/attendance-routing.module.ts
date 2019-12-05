import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyComponent } from './daily/daily.component';


const routes: Routes = [
  {
    path:'daily',
  component:DailyComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
