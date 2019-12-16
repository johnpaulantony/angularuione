import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Issue } from '../../models/issue';
import { Router } from '@angular/router';
import { TraineeserviceService } from '../../traineeservice.service';
import { Studentdetails } from 'src/app/models/StudentDetails';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {
batch1:Issue[]
test:Issue;
result:any;
course:Issue;
sub1:any;
  assign: Issue[];
  present: false;
  getassign: Studentdetails[];
  obj:Studentdetails;
  r:string;
  t: string;
  onOptionsSelected(value: string) {
    
    this.traineeservice.getassigned(value).subscribe(data => {
      
      this.getassign = data;
      console.log(this.getassign)
    });
  }
  constructor(private router: Router,public traineeservice: TraineeserviceService) { 
   
  }
  @ViewChild("mystu", { static: false }) mystu: ElementRef;
   
 
   onchange($event){
  
    this.present=$event.target.checked
    console.log(this.present)
  }
  generate(){
    let r= this.mystu.nativeElement.value;
 let s=r.split("/");
 this.t=s[1];
 console.log("final"+this.t);
   // this.r= this.mystu.nativeElement.value;
 // console.log("sur="+this.r);
  }

onSubmit(){
  
this.obj.studentId=this.t;
  this.traineeservice.saveattend(this.obj).subscribe(data => { this.obj = data; console.log(this.obj) })
}




  ngOnInit() {
    
    this.obj=new Studentdetails();
    this.traineeservice.getbatch().subscribe(data => { this.assign = data; console.log(this.assign) })
  
  
  }
}
