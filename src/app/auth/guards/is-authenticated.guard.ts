import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces/auth-status.enum';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.authStatus() === AuthStatus.authenticated) {
    return true;
  }

  if (authService.authStatus() === AuthStatus.checking) {
    return false;
  }

  // const url =state.url;
  // localStorage.setItem('url',url);

  router.navigateByUrl('/auth/login');
  return false;
};
