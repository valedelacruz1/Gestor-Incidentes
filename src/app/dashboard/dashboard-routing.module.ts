import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { isAdminGuard, isAuthenticatedGuard } from '../auth/guards';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'home', component: DashboardComponent },

      {
        path: 'incidentes',
        canActivate: [isAuthenticatedGuard],
        loadChildren: () =>
          import('../incidentes/incidentes.module').then(
            (m) => m.IncidentesModule
          ),
      },
      {
        path: 'roles',
        canActivate: [isAuthenticatedGuard,isAdminGuard],
        loadChildren: () =>
          import('../roles/roles.module').then(
            (m) => m.RolesModule
          ),
      },
      {
        path: 'usuarios',
        canActivate: [isAuthenticatedGuard],
        loadChildren: () =>
          import('../usuarios/usuarios.module').then(
            (m) => m.UsuariosModule
          ),
      },
      {
        path: 'dependencias',
        canActivate: [isAuthenticatedGuard,isAdminGuard],
        loadChildren: () =>
          import('../dependencias/dependencias.module').then(
            (m) => m.DependenciasModule
          ),
      },
      {
        path: 'tipoDocumentos',
        canActivate: [isAuthenticatedGuard,isAdminGuard],
        loadChildren: () =>
          import('../tipo-documentos/tipo-documentos.module').then(
            (m) => m.TipoDocumentosModule
          ),
      },
      {
        path: 'tipoIncidentes',
        canActivate: [isAuthenticatedGuard,isAdminGuard],
        loadChildren: () =>
          import('../tipo-incidentes/tipo-incidentes.module').then(
            (m) => m.TipoIncidentesModule
          ),
      },
      {
        path: 'estadoIncidentes',
        canActivate: [isAuthenticatedGuard,isAdminGuard],
        loadChildren: () =>
          import('../estado-incidentes/estado-incidentes.module').then(
            (m) => m.EstadoIncidentesModule
          ),
      },

      { path: '**', redirectTo: 'home' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
