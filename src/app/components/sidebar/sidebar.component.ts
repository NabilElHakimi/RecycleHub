import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkLightService } from '../../services/dark-light-mode/dark-light.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private darkLightService: DarkLightService
  ) {}

  toggleDarkMode(): void {
    this.darkLightService.toggleDarkMode();
  }
}
