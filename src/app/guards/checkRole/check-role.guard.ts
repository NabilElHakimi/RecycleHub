import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';

export const checkRoleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const user = JSON.parse(localStorage.getItem('userConnect') || '[]');
  if(user.role != "collector"){
    router.navigate(['/login']);
  }

  return true
};
