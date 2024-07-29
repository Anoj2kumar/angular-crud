import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const logindata = localStorage.getItem('logindata');
  console.log('authGuard: Checking authentication status');
  console.log('logindata:', logindata);

  if (logindata) {
   
    return true;
  } else {
   
    router.navigate(['/login-signup']);
    alert('You cannot access this page without login');
    return false;
  }
};
