import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { DarkLightService } from '../../services/dark-light-mode/dark-light.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterOutlet, RouterLink , RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  getNumberForParticular(): number {
    const numberOfCollets = localStorage.getItem('collecteData');
    return numberOfCollets ? JSON.parse(numberOfCollets).length : 0;
  }

  constructor(private darkLightService: DarkLightService
  ) {}

  toggleDarkMode(): void {
    this.darkLightService.toggleDarkMode();
  }

}
