import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { isAdminGuard } from '../auth/guards';

const routes: Routes = [
  {
    path:'',
    // component:ListadoComponent,
    children:[
      {
        path:'listado',
        canActivate: [isAdminGuard],
        component:ListadoComponent
    },
      {path:'perfil',component:PerfilComponent},
      { path: '**', redirectTo: 'listado' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
