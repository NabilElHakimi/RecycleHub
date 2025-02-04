import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collects',
  templateUrl: './collects.component.html',
  styleUrls: ['./collects.component.css'] ,
  imports: [CommonModule]
})
export class CollectsComponent implements OnInit {
  collects: any[] = [];

  ngOnInit() {
    this.loadCollects();
  }

  loadCollects() {
    // Récupérer les données depuis localStorage
    const collectsData = localStorage.getItem('collecteData');

    if (collectsData) {
      // Convertir en tableau d'objets
      this.collects = JSON.parse(collectsData);

      // Trier les collectes par date en ordre décroissant
      this.collects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
  }
}
