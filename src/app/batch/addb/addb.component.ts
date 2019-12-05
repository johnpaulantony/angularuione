import { Component, OnInit } from '@angular/core';
import { Issue } from '../../models/issue';
import { TraineeserviceService } from '../../traineeservice.service';

@Component({
  selector: 'app-addb',
  templateUrl: './addb.component.html',
  styleUrls: ['./addb.component.css']
})
export class AddbComponent implements OnInit {
result: any;
  public batch: any;
  course: Issue[];
  selected:any;
courseID:any;
  constructor(public traineeservice: TraineeserviceService) {
    this.batch=new Issue();

  }
  onSubmit() {
    this.traineeservice.saveSubject(this.batch).subscribe(result => this.result);
  }

  ngOnInit() {
   
    this.traineeservice.getCourseDetails().subscribe(data => { this.course = data; console.log("Data" + data) })
  }
  
}
   
