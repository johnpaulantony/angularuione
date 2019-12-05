import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { FreshersComponent } from './freshers/freshers.component';
import { UpskillingComponent } from './upskilling/upskilling.component';
import { ViewsComponent } from './views/views.component';


@NgModule({
  declarations: [FreshersComponent, UpskillingComponent, ViewsComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
