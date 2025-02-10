import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  // Show a confirmation popup
  showConfirmationPopup(
    title: string,
    text: string,
    confirmButtonText: string = 'Yes, delete it!',
    cancelButtonText: string = 'No, cancel',
    darkMode: boolean = false
  ): Promise<boolean> {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
      customClass: darkMode ? this.getDarkModeStyles() : this.getLightModeStyles(),
    }).then(result => {
      return result.isConfirmed;
    });
  }

  private getDarkModeStyles() {
    return {
      popup: 'bg-gray-800 text-white rounded-lg shadow-lg',
      title: 'text-xl font-semibold',
      confirmButton: 'bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600',
      cancelButton: 'bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600',
    };
  }

  private getLightModeStyles() {
    return {
      popup: 'bg-white text-black rounded-lg shadow-lg',
      title: 'text-xl font-semibold',
      confirmButton: 'bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600',
      cancelButton: 'bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600',
    };
  }
}
