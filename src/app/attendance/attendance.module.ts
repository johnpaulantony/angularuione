import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { DailyComponent } from './daily/daily.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DailyComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    FormsModule,ReactiveFormsModule

  ]
})
export class AttendanceModule { }
