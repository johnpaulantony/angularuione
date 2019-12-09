import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraineeserviceService } from 'src/app/traineeservice.service';
import { Issue } from 'src/app/models/issue';

@Component({
  selector: 'app-addt',
  templateUrl: './addt.component.html',
  styleUrls: ['./addt.component.css']
})
export class AddtComponent implements OnInit {

  trainer: Issue;
  result: any;
  trainer1: Issue[];
  constructor(private router: Router, private traineeservice: TraineeserviceService) {
    this.trainer = new Issue();
  }
  
  onSubmit() {
    this.traineeservice.savetrainer(this.trainer).subscribe(result => this.gotoadd());

  }
  gotoadd(){
    this.router.navigate(['/add'])
  }
 

  ngOnInit() { this.traineeservice.gettrainer().subscribe(data => { this.trainer1 = data; }); }
}
