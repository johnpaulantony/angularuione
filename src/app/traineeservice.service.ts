import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Issue, Studentpersonaldetails, Qualification } from './models/issue';
import { Observable } from 'rxjs';
import { Amenities } from './models/Amenities';
import { Studentdetails } from './models/StudentDetails';
@Injectable({
  providedIn: 'root'
})
export class TraineeserviceService {
  private Url: string;
  constructor(private http: HttpClient) {
    this.Url = 'http://192.168.6.25:8080/smi';
  }
  public getCourseDetails(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.Url + "/get");
  }
  public getSubjectDetails(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.Url + "/getsubject");
  }
  public save(course: Issue) {
    return this.http.post<Issue>(this.Url + "/insert", course);
  }
  public saveTopic(course: Issue) {
    return this.http.post<Issue>(this.Url + "/inserttopic", course);
  }
  public saveSubject(course: Issue) {
    console.log(course);
    return this.http.post<Issue>(this.Url + "/insertsubject", course);

  }
  public getCourseSubject(course: String): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.Url + "/getsubjectoncourse?courseId=" + course);
  }
  public saveBatch(course: Issue) {
    console.log(course.batchName)
    return this.http.post<Issue>(this.Url + "/insertbatch", course);
  }
  public getstudent(): Observable<Studentdetails[]> {
    return this.http.get<Studentdetails[]>(this.Url + "/get");
  }
  public getstudentpd(): Observable<Studentpersonaldetails[]> {
    return this.http.get<Studentpersonaldetails[]>(this.Url + "/get");
  }
  public getamenities(): Observable<Amenities[]> {
    return this.http.get<Amenities[]>(this.Url + "/get");
  }
  public saveamenities(amenities: Amenities) {

    return this.http.post<Amenities>(this.Url + "/insertstudentacademic", amenities);
  }
  public gettrainer(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.Url + "/gettrainer");
  }
  public savetrainer(trainer:Issue) {

    return this.http.post<Issue>(this.Url + "/inserttrainers", trainer);

  }
  
  public savestudent(student: Studentdetails) {
    console.log("Result " + student.statusDetails);
    return this.http.post<Studentdetails>(this.Url + "/insertstudent", student);
  }
  public savestudentpd(studentpd: Studentpersonaldetails) {

    return this.http.post<Studentpersonaldetails>(this.Url + "/insertstudentpersonal", studentpd);

  }
  
  /* public saveQualification(degree: Qualification) {
     console.log(degree);
     return this.http.post<Qualification>(this.Url + "/insertstudentqualification", degree);
 
   }*/
  /*public saveStream(degreeStream: Amenities) {
    console.log(degreeStream);

    return this.http.post<Amenities>(this.Url + "/insertstudentstream", degreeStream);

  }
  public getQualification() {
    return this.http.get<Amenities[]>(this.Url + "/getstudentqualication");
  }
  public getStream() {
    return this.http.get<Amenities[]>(this.Url + "/getstudentstream");
  }*/



}