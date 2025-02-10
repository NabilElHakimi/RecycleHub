import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import {async, Observable} from 'rxjs';
import {UserRegister} from '../../../model/UserRegister';
import {select, Store} from '@ngrx/store';
import {selectCurrentUser} from '../../../store/auth/user.selectors';

@Component({
  selector: 'app-collects',
  templateUrl: './collects.component.html',
  styleUrls: ['./collects.component.css'],
  imports: [FormsModule, CommonModule]
})
export class CollectsComponent implements OnInit {
  collects: any[] = [];
  showPopup = false;
  itemToDelete: any;
  darkMode: boolean = false;

  currentUser$: Observable<UserRegister | null>;
  currentUser : UserRegister | null | undefined ;

  constructor(private store : Store) {
    this.currentUser$ = this.store.pipe(select(selectCurrentUser)) ;
  }

  ngOnInit() {
    this.loadCollects();
    this.checkDarkMode();
    this.currentUser$.subscribe(user => {
           this.currentUser = user
      }
    )

  }

  loadCollects() {
    const collectsData = localStorage.getItem('collecteData');

    if (collectsData) {
      this.collects = JSON.parse(collectsData);
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
      const index = this.collects.findIndex(item => item.id === this.itemToDelete);

      if (index !== -1) {
        this.collects.splice(index, 1);
        localStorage.setItem('collecteData', JSON.stringify(this.collects));
      }

      this.closePopup();
    }
  }



}
