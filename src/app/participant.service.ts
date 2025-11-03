import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private http: HttpClient) { }

  public getAllCourses() {
    return this.http.get("http://localhost:8080/getAllCourses");
  }
  public registerParticipant(participant) {
    return this.http.post("http://localhost:8080/registerParticipant", participant, {responseType: 'text' as 'json'});
  }

  public getParticipantByCourse(course) {
    return this.http.get("http://localhost:8080/getParticipants/" + course);
  }
}
