import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoIncidentesRoutingModule } from './estado-incidentes.routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { EstadoIncidenteModalComponent } from './components/estado-incidente-modal/estado-incidente-modal.component';
import { ListadoComponent } from './pages/listado/listado.component';

@NgModule({
  declarations: [ListadoComponent,EstadoIncidenteModalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    EstadoIncidentesRoutingModule,
    ReactiveFormsModule,
    PipesModule,
  ],
})
export class EstadoIncidentesModule {}
