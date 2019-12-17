import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchRoutingModule } from './batch-routing.module';
import { AddbComponent } from './addb/addb.component';
import { ViewbComponent } from './viewb/viewb.component';
import { FormsModule } from '@angular/forms';
import { AssignstudentComponent } from './assignstudent/assignstudent.component';
import { StudentupdationComponent } from './studentupdation/studentupdation.component';


@NgModule({
  declarations: [AddbComponent, ViewbComponent, AssignstudentComponent, StudentupdationComponent],
  imports: [
    CommonModule,
    BatchRoutingModule,
    FormsModule
  ]
})
export class BatchModule { }
