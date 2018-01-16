import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DepartmentComponent } from './department/department.component';
import { PostComponent } from './post/post.component';
import { routing } from './app.routing';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    DepartmentComponent,
    PostComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
