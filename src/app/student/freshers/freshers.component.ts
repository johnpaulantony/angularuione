import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Studentpersonaldetails } from '../../models/issue';
import { TraineeserviceService } from '../../traineeservice.service';
import { Router } from '@angular/router';
import { Amenities } from 'src/app/models/Amenities';
import { Studentdetails } from 'src/app/models/StudentDetails';

@Component({
  selector: 'app-freshers',
  templateUrl: './freshers.component.html',
  styleUrls: ['./freshers.component.css']
})
export class FreshersComponent implements OnInit {
  student: Studentdetails;
  studentpd: Studentpersonaldetails;
  ameneties: Amenities;
  student1: Studentdetails[];
  studentpd1: Studentpersonaldetails[];
  amenities1: Amenities[];
  result: string;
  gender: any;
  bond: boolean;
  salary: string;
  statusDetails: string;
  constructor(private router: Router, private traineeservice: TraineeserviceService) {

  }
  onSubmit() {
    this.student.salary = this.salary;
    this.studentpd.gender = this.gender;
    this.student.bond = this.bond;
  
    this.traineeservice.saveamenities(this.ameneties).subscribe(result => this.result);
    this.traineeservice.savestudentpd(this.studentpd).subscribe(result => this.result);
    this.traineeservice.savestudent(this.student).subscribe(result => this.result);
  }

  gotoadd() {
    this.router.navigate(['/views'])
  }
 
  ngOnInit() {
    this.studentpd = new Studentpersonaldetails();
    this.student = new Studentdetails();
    this.ameneties = new Amenities();
  }

}


