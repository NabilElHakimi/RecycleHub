import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../store/auth/user.selectors';
import { UserRegister } from '../../model/UserRegister';
import { UserState } from '../../store/auth/./user.state';
import {DatePipe} from '@angular/common'; // Importer UserState

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  imports: [
    DatePipe
  ],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userConnect: UserRegister | null = null;

  constructor(private store: Store<UserState>, private router: Router) {}

  ngOnInit(): void {
    this.store.select(selectCurrentUser).subscribe(user => {
      this.userConnect = user;
      if (!user) {
        this.router.navigate(['/login']);
      }
    });
  }
}
