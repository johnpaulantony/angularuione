import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-rmonthly',
  templateUrl: './rmonthly.component.html',
  styleUrls: ['./rmonthly.component.css']
})
export class RmonthlyComponent implements OnInit {
  @ViewChild("frommonth",{static:false}) frommonth:ElementRef;
  @ViewChild("tomonth",{static:false}) tomonth:ElementRef;
  constructor() { }

  ngOnInit() {
  }
  public generate()
  {  
    var fmonth=this.frommonth.nativeElement.value;
    var tmonth=this.tomonth.nativeElement.value;
  }
}
