import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getData(key: string): any {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  }

  // Méthode pour sauvegarder les données dans le localStorage
  saveData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  
}
