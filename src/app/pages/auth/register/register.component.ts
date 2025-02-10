import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { registerUser } from '../../../store/auth/user.actions';
import { FormsModule } from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import { UserRegister } from '../../../model/UserRegister';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  imports: [
    FormsModule,
    RouterLink
  ],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = "";
  email = "";
  password = "";
  telephone = "";
  address = "";

  constructor(private store: Store , private router: Router) {}

  onSubmit() {
    if (!this.name || !this.email || !this.password || !this.telephone || !this.address) {
      alert("Veuillez remplir tous les champs !");
      return
    }
    alert('User Register Successfully')
    this.router.navigate(['/login'])


    const newUser: UserRegister = {
      name: this.name,
      email: this.email,
      password: this.password,
      telephone: this.telephone,
      address: this.address,
      create_at:new Date() ,
      role : "particular" ,
    };

    this.store.dispatch(registerUser({ user: newUser }));

  }
}
