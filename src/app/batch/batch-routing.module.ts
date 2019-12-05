import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbComponent } from './addb/addb.component';
import { ViewbComponent } from './viewb/viewb.component';


const routes: Routes = [
  {
    path:'addb',
    component:AddbComponent
  },
  {
    path:'viewb',
    component:ViewbComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchRoutingModule { }
