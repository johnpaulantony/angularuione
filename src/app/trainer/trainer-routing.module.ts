import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtComponent } from './addt/addt.component';
import { ViewtComponent } from './viewt/viewt.component';


const routes: Routes = [
  {
    path:'addt',
    component:AddtComponent
  },
  {
    path:'viewt',
    component:ViewtComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerRoutingModule { }
