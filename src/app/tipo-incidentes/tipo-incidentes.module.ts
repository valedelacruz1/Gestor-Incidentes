import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoIncidentesRoutingModule } from './tipo-incidentes.routing.module';
import { MaterialModule } from '../material/material.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { TipoIncidenteModalComponent } from './components/tipo-incidente-modal/tipo-incidente-modal.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListadoComponent,TipoIncidenteModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    TipoIncidentesRoutingModule
  ]
})
export class TipoIncidentesModule { }
