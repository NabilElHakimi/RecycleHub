import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { saveCollecteData } from '../../../store/collecte/collecte.actions';
import { CollecteItem } from '../../../store/collecte/collecte.reducer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demande-collecte',
  templateUrl: './demande-collecte.component.html',
  styleUrls: ['./demande-collecte.component.css'],
  imports: [FormsModule , CommonModule]
})
export class DemandeCollecteComponent {
  wasteType: string = '';
  weight: number = 0;
  address: string = '';
  datetime: string = '';
  photos: FileList | null = null;
  notes: string = '';
  toastMessage: string | null = null;  // Variable pour le message du toast

  constructor(private store: Store) {}

  // Fonction pour sauvegarder les données dans le store via NGRX
  saveData() {
    const collecteData: CollecteItem = {
      wasteType: this.wasteType,
      weight: this.weight,
      address: this.address,
      datetime: this.datetime,
      photos: this.photos,
      notes: this.notes
    };

    // Dispatch l'action pour sauvegarder les données dans le store
    console.log('Saving collecte data:', collecteData);
    this.store.dispatch(saveCollecteData({ collecteData }));

    // Afficher le message du toast
    this.showToast('La collecte a été ajoutée avec succès!');
  }

  // Fonction pour afficher le toast
  showToast(message: string) {
    this.toastMessage = message;
    setTimeout(() => {
      this.toastMessage = null;  // Masquer le toast après 3 secondes
    }, 3000);
  }

  // Fonction pour soumettre le formulaire
  onSubmit() {
    this.saveData();
    // Réinitialiser le formulaire après la soumission
    this.wasteType = '';
    this.weight = 0;
    this.address = '';
    this.datetime = '';
    this.photos = null;
    this.notes = '';
  }
}
