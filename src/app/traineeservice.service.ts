import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Issue } from './models/issue';
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

}
