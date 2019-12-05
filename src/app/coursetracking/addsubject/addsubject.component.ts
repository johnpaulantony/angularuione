import { Component, OnInit } from '@angular/core';
import { TraineeserviceService } from '../../traineeservice.service';
import { Issue } from '../../models/issue';

@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent implements OnInit {
  result: any;
  public test: any;
  course: Issue[]

  constructor(public traineeservice: TraineeserviceService) {
    this.test=new Issue();

  }
  onSubmit() {
    this.traineeservice.saveSubject(this.test).subscribe(result => this.result);
  }

  ngOnInit() {
   
    this.traineeservice.getCourseDetails().subscribe(data => { this.course = data; console.log("Data" + data) })
  }

}
