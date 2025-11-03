import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  public registerCourse(course) {
    return this.http.post("http://localhost:8080/registerCourse", course, {responseType: 'text' as 'json'});
  }
  
}
