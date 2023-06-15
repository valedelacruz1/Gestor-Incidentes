import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependenciasRoutingModule } from './dependencias.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { MaterialModule } from '../material/material.module';
import { DependenciaModalComponent } from './components/dependencia-modal/dependencia-modal.component';

@NgModule({
  declarations: [ListadoComponent,DependenciaModalComponent],
  imports: [
    CommonModule,
    DependenciasRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    PipesModule,
  ],
})
export class DependenciasModule {}
