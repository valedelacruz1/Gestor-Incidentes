import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { UsuarioModalComponent } from './components/usuario-modal/usuario-modal.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [ListadoComponent, PerfilComponent, UsuarioModalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    PipesModule,
    UsuariosRoutingModule,
  ],
})
export class UsuariosModule {}
