import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports.component';
import { RdailyComponent } from './rdaily/rdaily.component';
import { RmonthlyComponent } from './rmonthly/rmonthly.component';
import { RweeklyComponent } from './rweekly/rweekly.component';
import { RbatchwiseComponent } from './rbatchwise/rbatchwise.component';
import { RstudentwiseComponent } from './rstudentwise/rstudentwise.component';
import { RtbatchwiseComponent } from './rtbatchwise/rtbatchwise.component';
import { RtdailyComponent } from './rtdaily/rtdaily.component';
import { RtweeklyComponent } from './rtweekly/rtweekly.component';
import { RtmonthlyComponent } from './rtmonthly/rtmonthly.component';
import { RsdeployedComponent } from './rsdeployed/rsdeployed.component';
import { RsdiscontinuedComponent } from './rsdiscontinued/rsdiscontinued.component';
import { RsintrainingComponent } from './rsintraining/rsintraining.component';
import { RsterminatedComponent } from './rsterminated/rsterminated.component';


const routes: Routes = [
  {
    path:'reports',
    component:ReportsComponent
  },
  {
    path:'rdaily',
    component:RdailyComponent
  },
  {
    path:'rweekly',
    component:RweeklyComponent
  },
  {
    path:'rmonthly',
    component:RmonthlyComponent
  },
  {
    path:'rbatchwise',
    component:RbatchwiseComponent
  },
  {
    path:'rstudentwise',
    component:RstudentwiseComponent
  },
  {
    path:'rtdaily',
    component:RtdailyComponent
  },
  {
    path:'rtweekly',
    component:RtweeklyComponent
  },
  {
    path:'rtmonthly',
    component:RtmonthlyComponent
  },
  {
    path:'rtbatchwise',
    component:RtbatchwiseComponent
  },
  {
    path:'rsdeployed',
    component:RsdeployedComponent
  },
  {
    path:'rsdiscontinued',
    component:RsdiscontinuedComponent
  },
  {
    path:'rsintraining',
    component:RsintrainingComponent
  },
  {
    path:'rsterminated',
    component:RsterminatedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
