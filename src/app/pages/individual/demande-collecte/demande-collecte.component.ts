import { FormsModule } from '@angular/forms';
import { LocalStorageService } from './../../../services/local-storage/local-storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demande-collecte',
  templateUrl: './demande-collecte.component.html',
  styleUrls: ['./demande-collecte.component.css'],
  imports: [FormsModule]
})
export class DemandeCollecteComponent {
  wasteType: string = '';
  weight: number = 0;
  address: string = '';
  datetime: string = '';
  photos: FileList | null = null;
  notes: string = '';

  constructor(private localStorageService: LocalStorageService) {}

  // Fonction pour enregistrer les données dans le localStorage via le service
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
    this.localStorageService.saveData('collecteData', collecteData);
    alert('Les données ont été enregistrées dans le localStorage!');
  }

  // Fonction pour soumettre le formulaire
  onSubmit() {
    this.saveData();
    // Réinitialiser le formulaire après soumission
    this.wasteType = '';
    this.weight = 0;
    this.address = '';
    this.datetime = '';
    this.photos = null;
    this.notes = '';
  }
}
