import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { saveCollecteData } from '../../../store/collecte/collecte.actions';
import { CollecteItem } from '../../../store/collecte/collecte.reducer';

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

  constructor(private store: Store) {}

  // Function to save data in the store via NGRX
  saveData() {
    const collecteData: CollecteItem = {
      wasteType: this.wasteType,
      weight: this.weight,
      address: this.address,
      datetime: this.datetime,
      photos: this.photos,
      notes: this.notes
    };

    // Dispatch the action to save the data in the store
    console.log('Saving collecte data:', collecteData);
    this.store.dispatch(saveCollecteData({ collecteData }));

    // Alert user
    alert('La collecte a été ajoutée avec succès!');
  }

  // Function to submit the form
  onSubmit() {
    this.saveData();
    // Reset form after submission
    this.wasteType = '';
    this.weight = 0;
    this.address = '';
    this.datetime = '';
    this.photos = null;
    this.notes = '';
  }
}
