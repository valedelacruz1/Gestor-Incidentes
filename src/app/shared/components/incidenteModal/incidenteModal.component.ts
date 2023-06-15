import {
  Component,
  EventEmitter,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  SimpleChanges,
  OnChanges,
} from '@angular/core';

import { TipoIncidentesService } from '../../../tipo-incidentes/services/tipoIncidente.service';
import { TipoIncidentesMy } from '../../../interfaces/TipoIncidentes.interface';
import { IncidenteMy } from '../../../interfaces/Incidentes.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-incidenteModal',
  templateUrl: './incidenteModal.component.html',
  styleUrls: ['./incidenteModal.component.css'],
})

// myModal: HTMLElement = document.getElementById('myModal');
export class IncidenteModalComponent implements OnInit, OnChanges {

  turno: number = 1; // Variable para el ID de turno
  TipoIncidentes: TipoIncidentesMy[] = [];


  @Input()
  show!: Boolean;

  @Input()
  IncidenteInput!: IncidenteMy;

  @Output()
  modalOff: EventEmitter<boolean> = new EventEmitter();

  @ViewChild('myModal') modal!: ElementRef<HTMLDivElement>;

  miFormulario: FormGroup = this.fb.group({
    nombre: [],
    descripcion: [],
    tipoIncidente: [],
  });

  constructor(
    private fb: FormBuilder,
    private tipoIncidentesService: TipoIncidentesService
  ) {}

  ngOnInit(): void {
    this.tipoIncidentesService
      .getTipoIncidentes()
      .subscribe(({ tipoIncidentesMy }) => {
        // console.log(`Tipo Incidentes ${tipoIncidentesMy}`);
        this.TipoIncidentes = tipoIncidentesMy;
      });
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (this.show === true) {
      this.modal.nativeElement.style.display = 'block';
    }
    if(this.IncidenteInput.id!==0){
      console.log(`Llego este incidente ${this.IncidenteInput.id}`);
      console.log(`Llego este incidente ${this.IncidenteInput.inc_nombre}`);

      //Establecer los datos en el formulario a editar




    }

  }

  agregarFila() {
    // event.preventDefault();
    const { nombre, descripcion, tipoIncidente } = this.miFormulario.value;

    console.log(`Datos a enviar,${nombre}`);
    console.log(`Datos a enviar,${descripcion}`);
    console.log(`Datos a enviar,${tipoIncidente}`);
    // var nombre = document.getElementById("nombre")!.value;
    // var correo = document.getElementById("correo")!.value;
    // var opciones = document.getElementById("opciones")!.value;
    // var solicitud = document.getElementById("solicitud")!.value;

    // var table = document.getElementById("tabla");
    // var row = table.insertRow(-1);
    // var cell1 = row.insertCell(0);
    // var cell2 = row.insertCell(1);
    // var cell3 = row.insertCell(2);
    // var cell4 = row.insertCell(3);
    // var cell5 = row.insertCell(4);

    // cell1.innerHTML = turno;
    // cell2.innerHTML = nombre;
    // cell3.innerHTML = correo;
    // cell4.innerHTML = opciones;
    // cell5.innerHTML = solicitud;

    // turno++; // Incrementar el ID de turno

    // this.closeModal();
  }

  cerrarModal() {
    this.modal.nativeElement.style.display = 'none';
    this.modalOff.emit(false);
    // this.IncidenteLocal ={};
  }
}
