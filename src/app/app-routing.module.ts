import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes

import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';

// Guards
import {
  isAdminGuard,
  isAuthenticatedGuard,
  isNotAuthenticatedGuard,
} from './auth/guards/index';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [isNotAuthenticatedGuard],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: 'dashboard',
    canActivate: [isAuthenticatedGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },


  // { path: '', redirectTo: 'incidentes', pathMatch: 'full' },
  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
