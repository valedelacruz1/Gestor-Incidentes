import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoDocumentosRoutingModule } from './tipo-documentos.routing.module';
import { TipoDocumentoModalComponent } from './components/tipo-documento-modal/tipo-documento-modal.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [ListadoComponent, TipoDocumentoModalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TipoDocumentosRoutingModule,
    ReactiveFormsModule,
    PipesModule,
  ],
})
export class TipoDocumentosModule {}
