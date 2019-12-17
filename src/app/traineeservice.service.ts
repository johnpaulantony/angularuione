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
    this.Url = 'http://smitraining2020.herokuapp.com/smi';
  }
  public getCourseDetails(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.Url + "/get");
  }
  public getSubjectDetails(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.Url + "/getsubject");
  }
  public getTopicDetails(): Observable<Issue[]> {
   
    return this.http.get<Issue[]>(this.Url + "/gettopic");
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
    console.log('courseId'+course);
    return this.http.get<Issue[]>(this.Url + "/getsubjectoncourse?courseId=" + course);
  }
  public getassigned(course: String): Observable<Studentdetails[]> {
  
    return this.http.get<Studentdetails[]>(this.Url + "/getstudentnameandmobile?batchId=" + course);
  }
  public getSubjectTopic(course: String): Observable<Issue[]> {
    console.log('subjectId'+course);
    return this.http.get<Issue[]>(this.Url + "/gettopiconsubject?subjectId=" + course);
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
  public saveassign(assign: Studentdetails) {

    return this.http.post<Studentdetails>(this.Url + "/insertbatchmapping", assign);
  }
  public gettrainer(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.Url + "/gettrainer");
  }
  public getbatch(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.Url + "/getbatch");
  }
  public getMobile(mobile:string): Observable<Studentdetails[]> {
    return this.http.get<Studentdetails[]>(this.Url + "/getname?mobile="+mobile);
  }
  

  /*public getMobile(mobile:string): Observable<Studentdetails[]> {
    return this.http.get<Studentdetails[]>(this.Url + "/getname?mobile="+mobile);
  }*/
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
  public saveattend(studentad: Studentdetails) {

    return this.http.post<Studentdetails>(this.Url + "/insertattendance", studentad);

  }
  public saveTopicCov(studtop: Issue) {

    return this.http.post<Issue>(this.Url + "/insertdailystatus", studtop);

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


<<<<<<< HEAD
}
=======

}
>>>>>>> 05e33434616611946086156f45872f2172359e51
