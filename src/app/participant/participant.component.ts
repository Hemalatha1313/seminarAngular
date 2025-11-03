import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from '../course';
import { Participant } from '../participant';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  participant : Participant = new Participant("", "", "");
  message: any;
  courses : any;

  constructor(private service: ParticipantService) { }

  ngOnInit(): void {
    this.getAllCourses();

  }

  public getAllCourses(){
    let resp= this.service.getAllCourses();
    resp.subscribe((data)=>this.courses=data);
  }

  public registerParticipant(myForm : NgForm) {
    let response = this.service.registerParticipant(this.participant);
    response.subscribe((data) => this.message = data);
    setTimeout(() => { alert(this.message) }, 1000)
    myForm.reset();
  }
}
