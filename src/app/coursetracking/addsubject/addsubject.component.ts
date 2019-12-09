import { Component, OnInit } from '@angular/core';
import { TraineeserviceService } from '../../traineeservice.service';
import { Issue } from '../../models/issue';
import { Router, } from '@angular/router';
@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent implements OnInit {
  result: any;
  public test: any;
  course: Issue[];
  test1:Issue[];
  result1:boolean;
  constructor(private router: Router,public traineeservice: TraineeserviceService) {
    this.test=new Issue();

  }
  onSubmit() {
    this.traineeservice.saveSubject(this.test).subscribe(result => this.result, this.result1=this.result);
  }
  gotoadd(){
    this.router.navigate(['../coursetracking/add'])
  }
 
  ngOnInit() {
   
    this.traineeservice.getCourseDetails().subscribe(data => { this.course = data; console.log("Data" + data) })
    this.traineeservice.getSubjectDetails().subscribe(data => { this.test1 = data });
  
  }

}
