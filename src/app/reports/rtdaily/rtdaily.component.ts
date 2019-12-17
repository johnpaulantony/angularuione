import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rtdaily',
  templateUrl: './rtdaily.component.html',
  styleUrls: ['./rtdaily.component.css']
})
export class RtdailyComponent implements OnInit {
  today = new Date();
  date = this.today.getDate()+'-'+(this.today.getMonth()+1)+'-'+this.today.getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
