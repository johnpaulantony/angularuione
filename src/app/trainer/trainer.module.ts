import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerRoutingModule } from './trainer-routing.module';
import { AddtComponent } from './addt/addt.component';
import { ViewtComponent } from './viewt/viewt.component';


@NgModule({
  declarations: [AddtComponent, ViewtComponent],
  imports: [
    CommonModule,
    TrainerRoutingModule
  ]
})
export class TrainerModule { }
