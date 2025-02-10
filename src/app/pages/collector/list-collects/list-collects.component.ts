import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-collects',
  imports: [FormsModule, CommonModule],
  templateUrl: './list-collects.component.html',
  styleUrls: ['./list-collects.component.css']
})
export class ListCollectsComponent implements OnInit {
  collects: any[] = [];
  showPopup = false;
  itemToDelete: any;
  darkMode: boolean = false;

  ngOnInit() {
    this.loadCollects();
    this.checkDarkMode();
  }

  loadCollects() {
    const collectsData = localStorage.getItem('collecteData');
    if (collectsData) {
      this.collects = JSON.parse(collectsData);
      this.collects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
  }

  checkDarkMode() {
    const darkModeSetting = localStorage.getItem('darkMode');
    this.darkMode = darkModeSetting === 'enabled';
  }

  showConfirmationPopup(item: any) {
    this.itemToDelete = item;

    Swal.fire({
      title: 'Are you sure you want to delete this item?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel',
      customClass: this.darkMode ? this.getDarkModeStyles() : this.getLightModeStyles()
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteItem();
        Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
      }
    });
  }

  getDarkModeStyles() {
    return {
      popup: 'bg-gray-800 text-white rounded-lg shadow-lg',
      title: 'text-xl font-semibold',
      confirmButton: 'bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600',
      cancelButton: 'bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600',
    };
  }

  getLightModeStyles() {
    return {
      popup: 'bg-white text-black rounded-lg shadow-lg',
      title: 'text-xl font-semibold',
      confirmButton: 'bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600',
      cancelButton: 'bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600',
    };
  }

  closePopup() {
    this.showPopup = false;
    this.itemToDelete = null;
  }

  deleteItem() {
    if (this.itemToDelete) {
      const index = this.collects.findIndex(item => item.id === this.itemToDelete.id);
      if (index !== -1) {
        this.collects.splice(index, 1);
        localStorage.setItem('collecteData', JSON.stringify(this.collects));
      }
      this.closePopup();
    }
  }

  updateStatus(newStatus: string, item: any) {
    const index = this.collects.findIndex(col => col.id === item.id);
    if (index !== -1) {
      const oldStatus = this.collects[index].status;

      const confirmation = window.confirm(
        `Are you sure you want to change the status to "${newStatus}"?`
      );

      if (confirmation) {
        this.collects[index].status = newStatus;
        localStorage.setItem('collecteData', JSON.stringify(this.collects));
        console.log('New status saved:', newStatus);
      } else {
        this.collects[index].status = oldStatus;
      }
    }
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }

}
