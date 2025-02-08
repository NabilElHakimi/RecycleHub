import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { DarkLightService } from '../../services/dark-light-mode/dark-light.service';
import { UserRegister } from '../../model/UserRegister';
import { Store } from '@ngrx/store';
import { logout } from '../../store/auth/user.actions';
import { Observable } from 'rxjs';
import {UserState} from '../../store/auth/user.state';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [RouterOutlet, RouterLink, RouterModule, AsyncPipe],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentUser$!: Observable<UserRegister | null>;

  constructor(
    private darkLightService: DarkLightService,
    private router: Router,
    private store: Store<UserState>
  ) {}

  ngOnInit(): void {
    this.currentUser$ = this.store.select(state => state.auth.currentUser);
  }

  getNumberForParticular(): number {
    const numberOfCollets = localStorage.getItem('collecteData');
    return numberOfCollets ? JSON.parse(numberOfCollets).length : 0;
  }

  toggleDarkMode(): void {
    this.darkLightService.toggleDarkMode();
  }

  onLogout() {
    this.store.dispatch(logout());
    this.router.navigate(['/login']);
  }

}
