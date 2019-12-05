import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Issue, Studentdetails, Studentpersonaldetails, Amenities } from './models/issue';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TraineeserviceService {
  private Url: string;
  constructor(private http:HttpClient) { 
    this.Url = 'http://192.168.6.25:8080/smi';
    }
    public getCourseDetails(): Observable<Issue[]> {
      return this.http.get<Issue[]>(this.Url+"/get");
    }
    public getSubjectDetails(): Observable<Issue[]> {
      return this.http.get<Issue[]>(this.Url+"/getsubject");
    }
    
    public save(course: Issue) {
      return this.http.post<Issue>(this.Url+"/insert",course);
    }
    public saveTopic(course: Issue) {
      return this.http.post<Issue>(this.Url+"/inserttopic",course);
    }
    public saveSubject(course:Issue){
      console.log(course);
      return this.http.post<Issue>(this.Url+"/insertsubject",course);

    }
    public getCourseSubject(course:String): Observable<Issue[]> {      
      return this.http.get<Issue[]>(this.Url+"/getsubjectoncourse?courseId="+course);
    }
    public saveBatch(course:Issue){
      console.log(course.batchName)
      return this.http.post<Issue>(this.Url+"/insertbatch",course);
    }
    public getbatch():Observable<Issue[]>{
return this.http.get<Issue[]>(this.Url+"/get")
    }
    public getstudent(): Observable<Studentdetails[]> {
      return this.http.get<Studentdetails[]>(this.Url+"/get");
    }
   public getstudentpd(): Observable<Studentpersonaldetails[]> {
    return this.http.get<Studentpersonaldetails[]>(this.Url+"/get");
    }
    public getamenities(): Observable<Amenities[]> {
      return this.http.get<Amenities[]>(this.Url+"/get");
    }
    public savestudent(student:Studentdetails){
      return this.http.post<Studentdetails>(this.Url+"/insert",student);
    }
    public savestudentpd(studentpd:Studentpersonaldetails){
      return this.http.post<Studentpersonaldetails>(this.Url+"/insert",studentpd);

    }
    public saveamenities(amenities:Amenities){
      return this.http.post<Amenities>(this.Url+"/insert",amenities);

    }
}
