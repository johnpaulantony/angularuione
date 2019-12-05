import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Issue } from '../../models/issue';
import { TraineeserviceService } from '../../traineeservice.service';
import { Router, } from '@angular/router';
@Component({
  selector: 'app-addb',
  templateUrl: './addb.component.html',
  styleUrls: ['./addb.component.css']
})
export class AddbComponent implements OnInit {
  @ViewChild("date",{static:false}) date:ElementRef;
  @ViewChild("course_name_1",{static:false}) course_name_1:ElementRef;
  @ViewChild("type",{static:false}) type:ElementRef;
  @ViewChild("batchname",{static:false}) batchName1:ElementRef;
  @ViewChild("bbname",{static:false}) bbname:ElementRef;
  result: any;
  public batch: Issue;
  course: Issue[];
  result1:boolean;
  constructor(private router: Router,public traineeservice: TraineeserviceService) {
    

  }
  onSubmit() {
    var d1=new Date();
    this.batch.batchCreatedDate=d1.getFullYear()+"-"+(d1.getMonth()+1)+"-"+d1.getDate();
    this.traineeservice.saveBatch(this.batch).subscribe(result => this.result, this.result1=this.result);
  }

  ngOnInit() {
    this.batch=new Issue();
    this.traineeservice.getCourseDetails().subscribe(data => { this.course = data; console.log("Data" + this.course) })
  }
  public generate(){
    
    var dateValue=this.date.nativeElement.value;
    var d=new Date(dateValue)
    var myresult=(d.getMonth()+1)+"/"+d.getFullYear();
    var courseValue=this.course_name_1.nativeElement.value;
    var typeValue=this.type.nativeElement.value;
    this.batchName1.nativeElement.value=myresult+"/"+courseValue+"/"+typeValue
    this.batch.batchName=myresult+"/"+courseValue+"/"+typeValue
    this.bbname.nativeElement.value=this.course_name_1.nativeElement.value
    
    //this.traineeservice.getCourseDetails().pipe(map(na=>na),filter(a=>a.reduce()))
  }
  gotoadd(){
    this.router.navigate(['../batch/viewb'])
  }
}
   
