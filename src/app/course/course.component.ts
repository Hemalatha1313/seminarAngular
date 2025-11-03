import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course : Course = new Course("", "", "", "", "");
  message: any;
  
  constructor(private service : CourseService) { }

  ngOnInit() {
  }

  public registerCourse(myForm : NgForm) {
    let response = this.service.registerCourse(this.course); 
    response.subscribe((data) => this.message = data);
    setTimeout(() => { alert(this.message) }, 1000)
    myForm.reset();
   }
}
