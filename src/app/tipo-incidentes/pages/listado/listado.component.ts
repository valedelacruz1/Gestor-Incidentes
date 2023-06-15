import { Component, inject } from '@angular/core';

import { TipoIncidentesService } from '../../services/tipoIncidente.service';
import { TipoIncidente, TipoIncidentesMy } from 'src/app/interfaces/TipoIncidentes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {

  tiposIncidentes:any[]=[];

  private tipoIncidentesService = inject(TipoIncidentesService);

  public tipoIncidenteSeleccionado: TipoIncidente = {
    id: 0,
    tinc_nombre: '',
    tinc_descripcion: '',
    tinc_estado: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  modalOn: Boolean = false;

  constructor() {
    this.obtenerTipoIncidentes();
    console.log(this.tiposIncidentes);
  }

  obtenerTipoIncidentes() {
    this.tipoIncidentesService
      .getTipoIncidentes()
      .subscribe(({ tipoIncidentesMy, tipoIncidentesMo }) => {

        if(!tipoIncidentesMy){
          this.tiposIncidentes=tipoIncidentesMo;
        }else{
          this.tiposIncidentes=tipoIncidentesMy;
        }


      });
  }


  crearRole() {}
  editarTipoIncidente(tipoIncidente: any) {
    console.log('Clickeado editar', tipoIncidente.tinc_nombre);
    this.tipoIncidenteSeleccionado = tipoIncidente;
  }

  eliminarTipoIncidente(tipoIncidente: any) {
    console.log('Clickeado elimiar', tipoIncidente.tinc_nombre);
    this.tipoIncidenteSeleccionado = tipoIncidente;
  }

  onCloseModal(active: boolean) {
    this.modalOn = active;
    this.tipoIncidenteSeleccionado = {
         id: 0,
    tinc_nombre: '',
    tinc_descripcion: '',
    tinc_estado: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    };
  }
}
