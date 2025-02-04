import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';  // Import BehaviorSubject

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastSubject = new BehaviorSubject<string | null>(null);  // Initialize BehaviorSubject with a default value of null
  toastMessage$ = this.toastSubject.asObservable();  // Expose as an observable

  constructor() {}

  showToast(message: string) {
    this.toastSubject.next(message);  // Set the toast message

    // Hide the toast after 3 seconds
    setTimeout(() => {
      this.toastSubject.next(null);  // Clear the toast message after 3 seconds
    }, 3000);
  }
}
