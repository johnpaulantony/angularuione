import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from "fusioncharts";
import * as Charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import * as Widgets from 'fusioncharts/fusioncharts.widgets';
import { OtherformsComponent } from './otherforms/otherforms.component';
import { LoginComponent } from './login/login.component';
FusionChartsModule.fcRoot(FusionCharts, Charts,Widgets, FusionTheme);
// Import FusionCharts library and chart modules

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OtherformsComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,BrowserModule, FormsModule,  FusionChartsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
