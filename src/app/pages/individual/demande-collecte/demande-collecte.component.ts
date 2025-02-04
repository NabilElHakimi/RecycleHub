import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demande-collecte',
  templateUrl: './demande-collecte.component.html',
  styleUrls: ['./demande-collecte.component.css'],
  imports: [FormsModule ]
})
export class DemandeCollecteComponent {
  wasteType: string = '';
  weight: number = 0;
  address: string = '';
  datetime: string = '';
  photos: FileList | null = null;
  notes: string = '';

  constructor() {
    // Vérifier s'il y a des données enregistrées dans le localStorage au démarrage du composant
    const storedData = localStorage.getItem('collecteData');
    if (storedData) {
      const data = JSON.parse(storedData);
      this.wasteType = data.wasteType;
      this.weight = data.weight;
      this.address = data.address;
      this.datetime = data.datetime;
      this.notes = data.notes;
    }
  }

  // Fonction pour enregistrer les données dans le localStorage
  saveData() {
    const collecteData = {
      wasteType: this.wasteType,
      weight: this.weight,
      address: this.address,
      datetime: this.datetime,
      photos: this.photos,
      notes: this.notes
    };

    // Enregistrer les données dans le localStorage
    localStorage.setItem('collecteData', JSON.stringify(collecteData));
    alert('Les données ont été enregistrées dans le localStorage!');
  }

  // Fonction pour soumettre le formulaire
  onSubmit() {
    this.saveData();
    // Vous pouvez aussi vider le formulaire si vous voulez
    this.wasteType = '';
    this.weight = 0;
    this.address = '';
    this.datetime = '';
    this.photos = null;
    this.notes = '';
  }
}
