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
  imports: [FormsModule, CommonModule]
})
export class DemandeCollecteComponent {
  wasteType: string = '';
  weight: number = 0;
  address: string = '';
  datetime: string = '';
  photos: FileList | null = null;
  notes: string = '';
  toastMessage: string | null = null;

  constructor(private store: Store) {}

  saveData() {
    const collecteData: CollecteItem = {
      id: Date.now(), 
      wasteType: this.wasteType,
      weight: this.weight,
      address: this.address,
      datetime: this.datetime,
      photos: this.photos,
      notes: this.notes
    };

    console.log('Saving collecte data:', collecteData);
    this.store.dispatch(saveCollecteData({ collecteData }));
    this.showToast('La collecte a été ajoutée avec succès!');
  }

  // Rest of the component remains the same
  showToast(message: string) {
    this.toastMessage = message;
    setTimeout(() => {
      this.toastMessage = null;
    }, 3000);
  }

  onSubmit() {
    this.saveData();
    this.wasteType = '';
    this.weight = 0;
    this.address = '';
    this.datetime = '';
    this.photos = null;
    this.notes = '';
  }
}
