import { Component, OnInit } from '@angular/core';
import { TraineeserviceService } from '../../traineeservice.service';
import { Issue } from '../../models/issue';

@Component({
  selector: 'app-viewc',
  templateUrl: './viewc.component.html',
  styleUrls: ['./viewc.component.css']
})
export class ViewcComponent implements OnInit {
  course: Issue[];
  course2: Issue[];
  course3: Issue[];
  course1:Issue;
  result: void;
 
  constructor(private traineeservice : TraineeserviceService) {
   

  }
  onSubmit() {
    this.traineeservice.save(this.course1).subscribe(result => this.result);
    this.traineeservice.saveSubject(this.course1).subscribe(result => this.result);

    this.traineeservice.saveTopic(this.course1).subscribe(result => this.result);

  }
  ngOnInit() {
    this.traineeservice.getCourseDetails().subscribe(data => {
      this.course = data;
    });
    this.traineeservice.getSubjectDetails().subscribe(data => {
      this.course2 = data;
    });
    this.traineeservice.getTopicDetails().subscribe(data => {
      this.course3 = data;
    });
  }

  

}
