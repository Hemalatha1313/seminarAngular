import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-search-participant',
  templateUrl: './search-participant.component.html',
  styleUrls: ['./search-participant.component.css']
})
export class SearchParticipantComponent implements OnInit {

  participants:any;
  course:string;
  courses : any;

  constructor(private service: ParticipantService) { }

  ngOnInit() {
    this.getAllCourses();
  }

  public getAllCourses(){
    let resp= this.service.getAllCourses();
    resp.subscribe((data)=>this.courses=data);
  }

  public getParticipantByCourse(){
    let resp= this.service.getParticipantByCourse(this.course);
    resp.subscribe((data)=>this.participants=data);
   }
}
