import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let   router = inject(Router);
  const isLoggedIn = localStorage.getItem('isLoggedIn'); 

  if (isLoggedIn) {
    return true; // Allow access
  } else {
    router.navigateByUrl('/login'); // Redirect to login page
    return false;
  }
};
