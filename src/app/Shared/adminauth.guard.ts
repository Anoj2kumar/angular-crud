import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const adminauthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const adminlogin = localStorage.getItem('adminlogin');
  console.log('authGuard: Checking authentication status');
  // console.log('logindata:', logindata);

  if (adminlogin) {
   
    return true;
  } else {
   
    router.navigate(['/ladmin-login-signup']);
    alert('You cannot access this page without login');
    return false;
  }
};
