import { Component, OnInit } from '@angular/core';
import { Issue } from '../../models/issue';
import { Router } from '@angular/router';
import { TraineeserviceService } from '../../traineeservice.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {
batch1:Issue[]
test:Issue;
result:any
  constructor(private router: Router,public traineeservice: TraineeserviceService) { 
    this.test=new Issue()
  }
  onSubmit() {
    this.traineeservice.saveTopic(this.test).subscribe(result => this.result, );
  }
  

  ngOnInit() {
    this.traineeservice.getbatch().subscribe(data=>{this.batch1=data});
  }

}
