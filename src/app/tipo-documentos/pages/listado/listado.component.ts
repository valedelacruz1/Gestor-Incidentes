import { Component, inject } from '@angular/core';
import { TipoDocumentosService } from '../../services/tipoDocumentos.service';
import { TipoDocumento } from 'src/app/interfaces/TipoDocumentos.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  tiposDocumentos: any[] = [];

  private tipoDocumentosService = inject(TipoDocumentosService);

  public tipoDocumentoSeleccionado: TipoDocumento = {
    id: 0,
    tdoc_nombre: '',
    tdoc_descripcion: '',
    tdoc_estado: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  modalOn: Boolean = false;

  constructor() {
    this.obtenerTipoIncidentes();
    console.log(this.tiposDocumentos);
  }

  obtenerTipoIncidentes() {
    this.tipoDocumentosService
      .getTipoDocumentos()
      .subscribe(({ tipoDocumentosMy, tipoDocumentosMo }) => {
        if (!tipoDocumentosMy) {
          this.tiposDocumentos = tipoDocumentosMo;
        } else {
          this.tiposDocumentos = tipoDocumentosMy;
        }
      });
  }

  crearRole() {}
  editarTipoDocumento(tipoDocumento: any) {
    console.log('Clickeado editar', tipoDocumento.tdoc_nombre);
    this.tipoDocumentoSeleccionado = tipoDocumento;
  }

  eliminarTipoDocumento(tipoDocumento: any) {
    console.log('Clickeado elimiar', tipoDocumento.tdoc_nombre);
    this.tipoDocumentoSeleccionado = tipoDocumento;
  }

  onCloseModal(active: boolean) {
    this.modalOn = active;
    this.tipoDocumentoSeleccionado = {
      id: 0,
      tdoc_nombre: '',
      tdoc_descripcion: '',
      tdoc_estado: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
