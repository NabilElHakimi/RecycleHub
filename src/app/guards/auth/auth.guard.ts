import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = localStorage.getItem('userConnect');

  if (user == null) {
    console.log('User not authenticated. Redirecting to /login');
    router.navigate(['/login']);
    return false;
  }

  return true;
};
