import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { RdailyComponent } from './rdaily/rdaily.component';
import { RweeklyComponent } from './rweekly/rweekly.component';
import { RmonthlyComponent } from './rmonthly/rmonthly.component';
import { RtdailyComponent } from './rtdaily/rtdaily.component';
import { RtweeklyComponent } from './rtweekly/rtweekly.component';
import { RtmonthlyComponent } from './rtmonthly/rtmonthly.component';
import { RtbatchwiseComponent } from './rtbatchwise/rtbatchwise.component';
import { RstudentwiseComponent } from './rstudentwise/rstudentwise.component';
import { RbatchwiseComponent } from './rbatchwise/rbatchwise.component';
import { RsintrainingComponent } from './rsintraining/rsintraining.component';
import { RsdeployedComponent } from './rsdeployed/rsdeployed.component';
import { RsdiscontinuedComponent } from './rsdiscontinued/rsdiscontinued.component';
import { RsterminatedComponent } from './rsterminated/rsterminated.component';


@NgModule({
  declarations: [ReportsComponent, RdailyComponent, RweeklyComponent, RmonthlyComponent,
     RtdailyComponent, RtweeklyComponent, RtmonthlyComponent, RtbatchwiseComponent, 
     RstudentwiseComponent, RbatchwiseComponent, RsintrainingComponent, RsdeployedComponent,
      RsdiscontinuedComponent, RsterminatedComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
