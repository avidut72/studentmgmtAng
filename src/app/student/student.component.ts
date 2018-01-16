import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers:[StudentService]
})
export class StudentComponent {
  successMessage:string="";
  student:Student={
    firstName:'',
    lastName:'',
    address:'',
    departmentId:null
  }
  students:Student[];
  constructor(private studentService:StudentService) { }
 saveStudent(data){
  this.studentService.saveStudent(data)
  .subscribe(response=>{
    this.student={
      firstName:'',
      lastName:'',
      address:'',
      departmentId:null
    }  
  })
 }
 getDeptNames(){
  this.studentService.getDeptNames().subscribe(response=>{
    console.log(response);
  this.students=response;
  })
 }
 getStudents(){
   this.studentService.getStudents().subscribe(response=>{
     this.students=response;
   })
 }
  
  
}
interface Student{
  firstName:string;
  lastName:string;
  address:string;
  departmentId:number;
}
