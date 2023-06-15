import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';



const routes: Routes = [
  {
    path: '',
    component: ListadoComponent,
    children: [
      { path: 'listado', component: ListadoComponent },

      { path: '**', redirectTo: 'listado' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolesRoutingModule {}
