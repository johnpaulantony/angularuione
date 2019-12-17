import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-rweekly',
  templateUrl: './rweekly.component.html',
  styleUrls: ['./rweekly.component.css']
})
export class RweeklyComponent implements OnInit {
  @ViewChild("fromdate",{static:false}) fromdate:ElementRef;
  @ViewChild("todate",{static:false}) todate:ElementRef;

  constructor() { }

  ngOnInit() {
  }
  public generate()
  {  
    var from=this.fromdate.nativeElement.value;
    var to=this.todate.nativeElement.value;
  }
}
