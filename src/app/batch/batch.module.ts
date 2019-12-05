import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchRoutingModule } from './batch-routing.module';
import { AddbComponent } from './addb/addb.component';
import { ViewbComponent } from './viewb/viewb.component';


@NgModule({
  declarations: [AddbComponent, ViewbComponent],
  imports: [
    CommonModule,
    BatchRoutingModule
  ]
})
export class BatchModule { }
