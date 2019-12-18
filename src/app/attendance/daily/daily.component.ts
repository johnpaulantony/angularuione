import { Component, OnInit} from '@angular/core';
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
  batch1: Issue[]
  test: Issue;
  result: any;
  course: Issue;
  abc:number;
  sub1: any;
  assign: Issue[];
  getassign: Studentdetails[];
  obj: Studentdetails;
  r: string;
  t: string;
  present1: boolean;
  present: boolean;
  pre: string;
  app: Studentdetails;
  
  
 
  onOptionsSelected(value: string) {

    this.traineeservice.getassigned(value).subscribe(data => {
      this.getassign = data;
      console.log(this.getassign)
    });
  }
  constructor(private router: Router, public traineeservice: TraineeserviceService) {
   
  }
 
  onchange1(value,id,date) {
    
    this.obj=new Studentdetails();
    this.obj.attendanceDate=date
    console.log(this.obj.attendanceDate)
    this.obj.session = this.pre;
    console.log('session='+this.obj.session)
this.present1 = value.target.checked
   this.obj.status = this.present1;
 console.log(this.present1)
 this.obj.studentId=id;  
  this.traineeservice.saveattend(this.obj).subscribe(data => { this.obj = data;  })
console.log(this.obj.studentId);
  }

  onchange(value) {
    
       this.present = value.target.checked
    console.log(this.present)

    if (this.present === true) {
      this.pre = "Forenoon";
      console.log(this.pre)
    }
    else {
      this.pre = "Afternoon";
      console.log(this.pre)
    }
  }
    onSubmit(){  
      this.traineeservice.saveattend1(this.obj).subscribe(data => { this.obj= data;  })
    }
  ngOnInit() {
    this.obj = new Studentdetails();
    this.traineeservice.getbatch().subscribe(data => { this.assign = data; console.log(this.assign) })
  }
}
