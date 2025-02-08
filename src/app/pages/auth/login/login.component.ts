import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {Router, RouterLink} from '@angular/router';
import { Store } from '@ngrx/store';
import { loginUser } from '../../../store/auth/user.actions';
import { selectCurrentUser } from '../../../store/auth/user.selectors';
import {UserState} from '../../../store/auth/./user.state';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = "";
  password = "";
  users$;

  constructor(private store: Store<UserState>, private router: Router) {
    this.users$ = this.store.select(selectCurrentUser);

    this.users$.subscribe(user => {
      if (user) {
        this.router.navigate(['particular//home']);
      }
    });
  }

  login() {
    if (!this.email || !this.password) {
      alert("Veuillez remplir tous les champs !");
      return;
    }
    this.store.dispatch(loginUser({ email: this.email, password: this.password }));
  }

  onSubmit() {
    this.login();
  }
}
