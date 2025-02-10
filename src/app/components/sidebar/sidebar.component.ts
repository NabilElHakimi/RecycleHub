import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { DarkLightService } from '../../services/dark-light-mode/dark-light.service';
import { UserRegister } from '../../model/UserRegister';
import { Store, select } from '@ngrx/store';
import { logout } from '../../store/auth/user.actions';
import { Observable } from 'rxjs';
import { UserState } from '../../store/auth/user.state';
import {AsyncPipe, NgIf} from '@angular/common';
import { selectCurrentUser } from '../../store/auth/user.selectors'; // Assurez-vous d'importer le sélecteur

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule, AsyncPipe, NgIf],
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
    this.currentUser$ = this.store.pipe(select(selectCurrentUser));
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
