import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../store/auth/user.selectors';
import { UserRegister } from '../../model/UserRegister';
import { AppState } from '../../store/auth/app.state';
import {DatePipe} from '@angular/common'; // Importer AppState

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

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.store.select(selectCurrentUser).subscribe(user => {
      this.userConnect = user;
      if (!user) {
        this.router.navigate(['/login']);
      }
    });
  }
}
