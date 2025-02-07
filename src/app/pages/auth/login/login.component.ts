import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink} from '@angular/router';
import {UserInfo} from '../../../model/UserInfo';
import {UserLogin} from '../../../model/UserLogin';
import {Observable} from 'rxjs';
import {routes} from '../../../app.routes';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router : Router) {
  }

  email = ""
  password = ""



  login(){

    const loginUser : UserLogin = {
      email : this.email ,
      password : this.password
    }

    const  allUsers  : UserInfo[] = JSON.parse(localStorage.getItem('users') || '[]');
    const userFind : UserInfo|null   = this.checkUserIfExist(this.email , this.password , allUsers);
    if (userFind != null){
      alert("Connected")
      localStorage.setItem("userConnect" , JSON.stringify(userFind))
      this.router.navigate(['/home']);
    }

    else {
      alert("Not Connected")
    }

  }

  onSubmit(){
    this.login()
    console.log(this.email)
    console.log(this.password)
  }

  checkLocalStorage(){
    const users = localStorage.getItem('users');
    if(users == null){
      localStorage.setItem('users'  , "")
    }
  }


  checkUserIfExist (email : string , password:string , allUsers : UserInfo[]) : UserInfo | null{
    let user :UserInfo|null  = null ;
    allUsers.forEach(u=>
    {
      if(u.email == email){
        if(u.password == password)
        {
           user = u ;
        }
      }
    })

    return user ;
  }

}



