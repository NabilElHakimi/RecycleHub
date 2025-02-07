import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserInfo} from '../../model/UserInfo';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [
    DatePipe
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  constructor(private router : Router) {
  }

  userConnect : UserInfo =JSON.parse( localStorage.getItem('userConnect') || '[]')  ;

  ngOnInit(): void {
    const userConnect  = localStorage.getItem('userConnect') ;
    if(userConnect == null ){
      this.router.navigate(['/login'])
    }
  }

}
