import { Component, Input, inject } from '@angular/core';
import { IncidentesService } from '../../services/incidente.service';
import { IncidenteMo, IncidenteMy, RespIncidentes } from 'src/app/interfaces/Incidentes.interface';



@Component({
  selector: 'incidentes-card-info',
  templateUrl: './incidentes-card-info.component.html',
  styleUrls: ['./incidentes-card-info.component.css']
})
export class IncidentesCardInfoComponent {

  @Input()
  EstadoIncidenteInput!: string;
  @Input()
  Estado!: boolean;
  @Input()
  ColorTarjeta!:string;


  private incidentesService = inject(IncidentesService);

  incidentes:any[]=[];



  constructor(){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    //OBTENER TODOS PARA ADMIN
    this.incidentesService.getIncidentes().subscribe(({incidentesMy,incidentesMo,totalMYSQL,totalMongoDB})=>{
      if(incidentesMy){
        this.incidentes=incidentesMy;

      }else{
        this.incidentes=incidentesMo;
      }
    });

    //OBTENER LOS SIN RESOLVER PARA ADMIN
    this.incidentesService




  }

  obtenerInfoIncidentes(){
    this.EstadoIncidenteInput;
    this.Estado;
    this.ColorTarjeta;
  }

}
