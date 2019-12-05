import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoursetrackingRoutingModule } from './coursetracking-routing.module';

import { ViewcComponent } from './viewc/viewc.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { AddsubjectComponent } from './addsubject/addsubject.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddtopicComponent } from './addtopic/addtopic.component';


 
@NgModule({
  declarations: [ ViewcComponent, AddComponent,AddsubjectComponent,AddcourseComponent,AddtopicComponent],
  imports: [
    CommonModule,
    CoursetrackingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CoursetrackingModule { }
