import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseService } from './course.service';
import { CourseComponent } from './course/course.component';
import { ParticipantComponent } from './participant/participant.component';
import { MenuComponent } from './menu/menu.component';
import { SearchParticipantComponent } from './search-participant/search-participant.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ParticipantComponent,
    MenuComponent,
    SearchParticipantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
