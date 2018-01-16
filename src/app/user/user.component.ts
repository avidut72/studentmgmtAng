import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  name:string;
  email:string;
  address:object;
  hobbies:string[];
  showHobbies:boolean;
    constructor(){
    this.name='Avinit';
    this.email='avidut72@gmail.com';
    this.address={
      district:'Dhanusha',
      zone:'Janakpur',
      country:'Nepal'
    };
    this.hobbies=['Cricket', 'Basketball', 'Modern Combat', 'Programming', 'Cooking']
    this.showHobbies=false;
    
  }
  toggleHobby(){
    if(this.showHobbies==true){
      this.showHobbies=false;
    }else{
      this.showHobbies=true;
    }
    }
    addHobby(hobby){
      this.hobbies.push(hobby);
    }
    deleteHobby(index){
      this.hobbies.splice(index,1);
    }

}
