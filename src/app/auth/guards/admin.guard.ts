import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthRole } from '../interfaces/auth-role.enum';
// TODO:TERMINAR DE PULIR EL GUARD ADMIN
export const isAdminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.role() === AuthRole.admin ) {
    return true;
  }

  if(authService.role()=== AuthRole.usuario){
    return false;
  }



  router.navigateByUrl('/dashboard');
  return false;
};
