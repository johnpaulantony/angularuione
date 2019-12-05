import { Component, OnInit } from '@angular/core';
import { TraineeserviceService } from '../../traineeservice.service';
import { Issue } from '../../models/issue';

@Component({
  selector: 'app-addtopic',
  templateUrl: './addtopic.component.html',
  styleUrls: ['./addtopic.component.css']
})
export class AddtopicComponent implements OnInit {
  onOptionsSelected(value: string) {
    this.traineeservice.getCourseSubject(value).subscribe(data => {
      this.getSubject = data;
    });
  }
  result: any;
  public test: Issue;
  course: Issue[];
  subject: Issue[];
  getSubject:Issue[];
  sample:Issue;

  constructor(public traineeservice: TraineeserviceService) {
    this.test = new Issue();

  }
  onSubmit() {
    this.traineeservice.saveTopic(this.test).subscribe(result => this.result);
  }

  ngOnInit() {

    this.traineeservice.getCourseDetails().subscribe(data => { this.course = data; })
    this.traineeservice.getSubjectDetails().subscribe(data => { this.subject = data; })
  }

}
