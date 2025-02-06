import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CollecteItem {
  id: number;
  wasteType: string;
  weight: number;
  address: string;
  datetime: string;
  image?: string;
  notes: string;
}

@Component({
  selector: 'app-demande-collecte',
  templateUrl: './demande-collecte.component.html',
  styleUrls: ['./demande-collecte.component.css'],
  imports: [FormsModule, CommonModule]
})

export class DemandeCollecteComponent {
  wasteType = '';
  weight = 0;
  address = '';
  datetime = '';
  imageBase64: string | null = null;
  notes = '';
  toastMessage: string | null = null;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.convertToBase64(file);
    } else {
      this.imageBase64 = null;
    }
  }

  private convertToBase64(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageBase64 = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  saveData() {
    const collecteData: CollecteItem = {
      id: Date.now(),
      wasteType: this.wasteType,
      weight: this.weight,
      address: this.address,
      datetime: this.datetime,
      notes: this.notes
    };

    if (this.imageBase64) {
      collecteData.image = this.imageBase64;
    }

    const existingData = JSON.parse(localStorage.getItem('collecteData') || '[]');
    existingData.push(collecteData);
    localStorage.setItem('collecteData', JSON.stringify(existingData));

    this.showToast('Collecte sauvegardée avec succès!');
    this.resetForm();
  }

  private resetForm() {
    this.wasteType = '';
    this.weight = 0;
    this.address = '';
    this.datetime = '';
    this.imageBase64 = null;
    this.notes = '';
  }

  showToast(message: string) {
    this.toastMessage = message;
    setTimeout(() => this.toastMessage = null, 3000);
  }

  onSubmit() {
    this.saveData();
  }

}
