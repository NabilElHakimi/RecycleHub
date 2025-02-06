import {Component, Inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {UserInfo} from '../../../model/UserInfo';
import {RouterLink} from '@angular/router';

@Component({

  selector: 'app-register',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {

  name  = "";
  email  = "";
  password  = "";
  telephone  = "";
  address  = "";

  register()
  {

    this.checkLocalStorage();

    const userInfo : UserInfo =  {
      name : this.name ,
      email : this.email ,
      password : this.password ,
      telephone : this.telephone,
      address : this.address ,
      create_at : new Date()
    }

    if (this.checkIfExisted(this.email)) {
      console.log("User does not exist, adding...");
      let allUsers: UserInfo[] = JSON.parse(localStorage.getItem('users') || '[]');
      allUsers.push(userInfo);
      localStorage.setItem('users', JSON.stringify(allUsers));
    } else {
      console.log("User already exists!");
    }

  }

  onSubmit(){
    this.register()
  }

  checkIfExisted(email : string)  {
    const allUsers : UserInfo[] =  JSON.parse(localStorage.getItem("users") || '[]');
    const userExist = allUsers.find(user => user.email == email) || null;
    return userExist == null;

  }


  checkLocalStorage(){
    const users = localStorage.getItem('users');
    if(users == null){
      localStorage.setItem('users'  , "")
    }
  }

}
