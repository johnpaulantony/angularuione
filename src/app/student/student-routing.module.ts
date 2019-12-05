import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FreshersComponent } from './freshers/freshers.component';
import { UpskillingComponent } from './upskilling/upskilling.component';
import { ViewsComponent } from './views/views.component';


const routes: Routes = [
  {
    path:'freshers',
    component:FreshersComponent
  },
  {
    path:'upskilling',
    component:UpskillingComponent
  },
  {
    path:'views',
    component:ViewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
