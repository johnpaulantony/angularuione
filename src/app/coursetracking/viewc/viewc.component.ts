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
 
  constructor(private traineeservice : TraineeserviceService) {
  }
  
  ngOnInit() {
    this.traineeservice.getCourseDetails().subscribe(data => {
      this.course = data;
    });
  }

  

}
