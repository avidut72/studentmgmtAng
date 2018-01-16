import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  providers:[DepartmentService]
})
export class DepartmentComponent{
  successMessage:string="";
  department:Department={
    departmentId:null,
    departmentName:""
  }
  departments:Department[];
  constructor(private departmentService:DepartmentService) { }

  getDepartments(){
    this.departmentService.getDepartments().subscribe(response=>{
    this.departments=response;
    })
  }
  saveDepartment(data){
    this.departmentService.saveDepartment(data)
    .subscribe(res=>{
    this.department={
      departmentId:null,
      departmentName:""
    }
    //this.getDepartments();
    
  });
  }
  editForm(department){
    this.department=department;
  }
  deleteDepartment(departmentId){
    this.departmentService.deleteDepartment(departmentId).subscribe(res=>{
      this.getDepartments();
      this.successMessage=res;
    })
  }
}
interface Department{
  departmentId: number;
  departmentName: string;
  
}
