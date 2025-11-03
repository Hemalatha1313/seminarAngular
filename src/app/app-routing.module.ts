import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { ParticipantComponent } from './participant/participant.component';
import { SearchParticipantComponent } from './search-participant/search-participant.component';

const routes: Routes = [
  {path:"", redirectTo: "registerCourse", pathMatch: "full"},
  {path: "registerCourse", component: CourseComponent},
  {path: "registerParticipant", component: ParticipantComponent},
  {path: "searchParticipant", component: SearchParticipantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
