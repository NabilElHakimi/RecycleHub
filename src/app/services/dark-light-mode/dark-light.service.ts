import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkLightService {

  private storageKey = 'darkMode';

  constructor() {
    this.loadTheme();
  }

  toggleDarkMode(): void {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem(this.storageKey, isDark ? 'enabled' : 'disabled');
  }

  private loadTheme(): void {
    const isDark = localStorage.getItem(this.storageKey) === 'enabled';
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }


}
