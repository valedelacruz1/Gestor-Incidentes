import { Component, inject } from '@angular/core';
import { EstadoIncidentesService } from '../../services/estadoIncidente.service';
import {
  EstadoIncidente,
  EstadoIncidentesMo,
  EstadoIncidentesMy,
} from 'src/app/interfaces/EstadoIncidentes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  estadosIncidentes: any[] = [];

  private estadoIncidentesService = inject(EstadoIncidentesService);

  public estadoIncidenteSeleccionado: EstadoIncidente = {
    id: 0,
    est_nombre: '',
    est_estado: true,
    est_descripcion: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  modalOn: Boolean = false;

  constructor() {
    this.obtenerRoles();
  }

  obtenerRoles() {
    this.estadoIncidentesService
      .getEstadoIncidentes()
      .subscribe(({ estadoIncidentesMy, estadoIncidentesMo }) => {
        if (!estadoIncidentesMy) {
          this.estadosIncidentes = estadoIncidentesMo;
        } else {
          this.estadosIncidentes = estadoIncidentesMy;
        }
      });
  }

  crearRole() {}
  editarIncidente(estadoIncidente: any) {
    console.log('Clickeado editar', estadoIncidente.est_nombre);
    this.estadoIncidenteSeleccionado = estadoIncidente;
  }

  eliminarIncidente(estadoIncidente: any) {
    console.log('Clickeado elimiar', estadoIncidente.est_nombre);
    this.estadoIncidenteSeleccionado = estadoIncidente;
  }

  onCloseModal(active: boolean) {
    this.modalOn = active;
    this.estadoIncidenteSeleccionado = {
      id: 0,
      est_nombre: '',
      est_estado: true,
      est_descripcion: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
