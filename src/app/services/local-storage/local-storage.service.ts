import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getData(key: string): any[] {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : []; // Return an empty array if no data
  }

  // Méthode pour sauvegarder les données dans le localStorage
  saveData(key: string, data: any): void {
    let storedData = this.getData(key);

    // Ensure storedData is an array before using push
    if (!Array.isArray(storedData)) {
      storedData = [];  // If it's not an array, reset it to an empty array
    }

    storedData.push(data);  // Append new data
    localStorage.setItem(key, JSON.stringify(storedData));  // Save the updated array to localStorage
  }
}
