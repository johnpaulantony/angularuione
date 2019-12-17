import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-rdaily',
  templateUrl: './rdaily.component.html',
  styleUrls: ['./rdaily.component.css']
})
export class RdailyComponent implements OnInit {
   today = new Date();
  date = this.today.getDate()+'-'+(this.today.getMonth()+1)+'-'+this.today.getFullYear();
  time = this.today.getHours() + ":" + this.today.getMinutes();
  constructor() { }

  ngOnInit() {
    

  }
  public generate(){
    
  }
}
