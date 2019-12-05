import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataSource: Object;
  chartConfig: Object;
  constructor()
  {
  this.chartConfig = {
  width: '700',
  height: '400',
  type: 'column3d',
  dataFormat: 'json',
  }
  this.dataSource = {
  "chart": {
  "caption": "Strength of Students [2018-20]",
  "xAxisName": "Year",
  "yAxisName": "Students",
  "theme": "fusion",
  "Color": "#DDDDDD",
  },
  "data": [{
  "label": "2018",
  "value": "15"
  }, {
  "label": "2019",
  "value": "30"
  }, {
  "label": "2020",
  "value": "60"
  }]
  };
  
  }
 
  ngOnInit() {
  }

}
