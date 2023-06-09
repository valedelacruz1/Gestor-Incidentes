import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';

const routes: Routes = [
  {
    path: '',
    component: ListadoComponent,
    children: [
      { path: 'listado', component: ListadoComponent },
      { path: 'agregar', component: AgregarComponent },
      { path: 'editar/:id', component: ListadoComponent },
      // {path:'listado',component:ListadoComponent}
      { path: '**', redirectTo: 'listado' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncidentesRoutingModule {}
