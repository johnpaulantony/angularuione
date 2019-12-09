import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/models/issue';
import { TraineeserviceService } from 'src/app/traineeservice.service';

@Component({
  selector: 'app-viewt',
  templateUrl: './viewt.component.html',
  styleUrls: ['./viewt.component.css']
})
export class ViewtComponent implements OnInit {
trainer:Issue[];
constructor(private traineeservice : TraineeserviceService) {
}

ngOnInit() {
  this.traineeservice.gettrainer().subscribe(data => {
    this.trainer = data;
  });
}}

