import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-rtmonthly',
  templateUrl: './rtmonthly.component.html',
  styleUrls: ['./rtmonthly.component.css']
})
export class RtmonthlyComponent implements OnInit {

  @ViewChild("fmonth",{static:false}) fmonth:ElementRef;
@ViewChild("tomonth",{static:false}) tomonth:ElementRef;
  constructor() { }

  ngOnInit() {
  }
  public generate(){
    var frommonth = this.fmonth.nativeElement.value;
var tomonth = this.tomonth.nativeElement.value;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  }
}
