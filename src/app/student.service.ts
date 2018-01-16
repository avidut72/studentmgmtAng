import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers} from '@angular/http';


@Injectable()
export class StudentService {

  constructor(private http:Http) { }
  getStudents(){
    var headers=new Headers({'Content-Type':'application/json'});
    var options=new RequestOptions({headers:headers});
    return this.http.get('http://localhost:8888/students',options)
    .map(response=>response.json());    
  }
  saveStudent(student:any){
    var body= JSON.stringify(student);
    var headers=new Headers({'Content-Type':'application/json'});
    var options=new RequestOptions({headers:headers});
    return this.http.post('http;//localhost:8888/students',options,body)
    .map(response=>response.json());
  }
  getDeptNames(){
    var headers=new Headers({'Content-Type':'application/json'});
    var options=new RequestOptions({headers:headers});
    return this.http.get('http://localhost:8888/departments/names',options)
    .map(response=>response.json());    
  }
  }


