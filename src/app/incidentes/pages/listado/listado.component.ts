import { Component, OnInit, inject } from '@angular/core';
import { IncidentesService } from '../../services/incidente.service';
import {
  IncidenteMo,
  IncidenteMy,
  IncidenteSeleccionado,
} from '../../../interfaces/Incidentes.interface';

import { AuthService } from 'src/app/auth/services/auth.service';

interface IncidenteCardInfo {
  estadoIncidente: string;
  estado: boolean;
  color:string
}

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {

  public infoIncidentesCard: IncidenteCardInfo[] = [
    { estadoIncidente: 'Pendientes', estado:true ,color:'' },
    { estadoIncidente: 'Resueltas', estado:true ,color:'' },
    { estadoIncidente: 'Cerradas', estado:false ,color:'' },


  ];
  public incidentes: any[] = [];

  private incidentesService = inject(IncidentesService);
  private authService = inject(AuthService);

  BDIncidente: string = '';
  modalOn: Boolean = false;
  esAdmin: boolean = false;


  public incidenteSeleccionado: undefined;

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


    if (this.authService.role() === 'ADMIN_ROLE') {
      this.esAdmin = true;
    }

    this.obtenerIncidentes();
    console.log("Valor admin",this.esAdmin);

  }

  obtenerIncidentes() {

    if(this.esAdmin===true){
      this.incidentesService
      .getIncidentes()
      .subscribe(({ incidentesMy, incidentesMo }) => {
        if (!incidentesMy) {
          this.incidentes = incidentesMo;
          this.BDIncidente = 'MONGO';
        } else {
          this.incidentes = incidentesMy;
          this.BDIncidente = 'MYSQL';
        }
      });
    }
    if(this.esAdmin===false){
      let usuario=this.authService.usuarioLogueado()!;
      this.incidentesService
      .getIncidentesPorUsuario(usuario.id,1,0,true)
      .subscribe(({ incidentesMy, incidentesMo }) => {
        if (!incidentesMy) {
          this.incidentes = incidentesMo;
          console.log(this.incidentes);
          this.BDIncidente = 'MONGO';
        } else {
          this.incidentes = incidentesMy;
          console.log(this.incidentes);
          this.BDIncidente = 'MYSQL';
        }
      });

    }



  }

  crearIncidente() {

  }

  editarIncidente(incidente: any) {
    this.incidenteSeleccionado = incidente;

    this.modalOn = true;
  }

  eliminarIncidente(incidente: any) {
    console.log('Clickeado editar', incidente.inc_descripcion);
  }

  onCloseModal(active: boolean) {
    this.modalOn = active;
    this.incidenteSeleccionado = undefined;
    console.log("Incidente Seleccionado",this.incidenteSeleccionado);
  }
}
