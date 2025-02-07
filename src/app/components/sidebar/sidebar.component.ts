import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import { DarkLightService } from '../../services/dark-light-mode/dark-light.service';
import {UserRegister} from '../../model/UserRegister';

@Component({
  selector: 'app-sidebar',
  imports: [RouterOutlet, RouterLink , RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{


  ngOnInit(): void {
    const userConnect  = localStorage.getItem('userConnect') ;
    if(userConnect == null ){
      this.router.navigate(['/login'])
    }
  }



  getNumberForParticular(): number {
    const numberOfCollets = localStorage.getItem('collecteData');
    return numberOfCollets ? JSON.parse(numberOfCollets).length : 0;
  }

  constructor(private darkLightService: DarkLightService , private router : Router
  ) {}

  toggleDarkMode(): void {
    this.darkLightService.toggleDarkMode();
  }

}
