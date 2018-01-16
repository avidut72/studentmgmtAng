import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DepartmentService {

  constructor(private http:Http) { }
  getDepartments(){
    var headers=new Headers({'Content-Type':'application/json'});
    var options=new RequestOptions({headers:headers});
    return this.http.get('http://localhost:8888/departments',options)
    .map(response=>response.json());    
  }
  saveDepartment(department:any){
    var body=JSON.stringify(department);
    const headers=new Headers();
    headers.append('Content-Type','application/json');
    const option=new RequestOptions({headers:headers});
    return this.http.post('http://localhost:8888/departments',body,option)
    .map(response=>response.json());
  }
  deleteDepartment(departmentId){
    const headers=new Headers();
    headers.append('Content-Type','application/json');
    const options=new RequestOptions({headers:headers,params:{departmentId:departmentId}});
    return this.http.delete('http://localhost:8888/departments',options)
    .map(res=>res.text());
  }
}
