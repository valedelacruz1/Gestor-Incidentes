import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';

import { IncidentesRoutingModule } from './incidentes-routing.module';
import { HomeComponent } from './pages/home/home.component';

import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { IncidenteModalComponent } from "./components/incidenteModal/incidenteModal.component";
import { IncidentesCardInfoComponent } from './components/incidentes-card-info/incidentes-card-info.component';
// BarranavegacionComponent,

@NgModule({
  declarations: [
    HomeComponent,
    IncidenteModalComponent,
    ListadoComponent,
    AgregarComponent,
    IncidentesCardInfoComponent,
  ],
  imports: [
    CommonModule,
    IncidentesRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,

    PipesModule,
  ],
  exports: [HomeComponent],
})
export class IncidentesModule {}
