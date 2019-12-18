import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Issue } from 'src/app/models/issue';
import { TraineeserviceService } from 'src/app/traineeservice.service';
import { Studentdetails } from 'src/app/models/StudentDetails';

@Component({
  selector: 'app-assignstudent',
  templateUrl: './assignstudent.component.html',
  styleUrls: ['./assignstudent.component.css']
})
export class AssignstudentComponent implements OnInit {
  getassign: Studentdetails[];
  onOptionsSelected(value: string) {
    this.traineeservice.getassigned(value).subscribe(data => {
      this.getassign = data;
      console.log(this.getassign)
    });
  }
  @ViewChild("mbno", { static: false }) mbno: ElementRef;
  assign: Issue[];
t:string;
  assign1: Studentdetails[];
  q: string;
  sub: Studentdetails[];
sub1:any;
  constructor(public traineeservice: TraineeserviceService) {
    this.sub1=new Studentdetails();
   }
  search($event) {
    let q = $event.target.value;
    console.log("test = " + q);
    this.traineeservice.getMobile(q).subscribe(data => { this.assign1 = data; console.log(this.assign1) })
    console.log("op:"+this.assign1); 
 let r= this.mbno.nativeElement.value;
 let s=r.split("/");
 this.t=s[1];
 console.log("final"+this.t);
  }
  onSubmit(){
    this.sub1.studentId=this.t;
    this.traineeservice.saveassign(this.sub1).subscribe(data => { this.sub1 = data; console.log("hi"+this.sub1) })
  }
  ngOnInit() {
  this.traineeservice.getbatch().subscribe(data => { this.assign = data; console.log(this.assign) })
}
}