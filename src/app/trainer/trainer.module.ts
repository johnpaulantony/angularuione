import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerRoutingModule } from './trainer-routing.module';
import { AddtComponent } from './addt/addt.component';
import { ViewtComponent } from './viewt/viewt.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddtComponent, ViewtComponent],
  imports: [
    CommonModule,
    TrainerRoutingModule,
    FormsModule
  ]
})
export class TrainerModule { }
