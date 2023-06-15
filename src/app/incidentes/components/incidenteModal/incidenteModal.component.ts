import {
  Component,
  EventEmitter,
  OnInit,
  Input,
  Output,
  SimpleChanges,
  OnChanges,
  inject,
} from '@angular/core';

import { TipoIncidentesService } from '../../../tipo-incidentes/services/tipoIncidente.service';
import { TipoIncidentesMy } from '../../../interfaces/TipoIncidentes.interface';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';
import { EstadoIncidentesService } from '../../../estado-incidentes/services/estadoIncidente.service';
import { EstadoIncidentesMy } from 'src/app/interfaces/EstadoIncidentes.interface';
import { IncidentesService } from '../../services/incidente.service';
import { AuthService } from 'src/app/auth/services/auth.service';
// import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-incidenteModal',
  templateUrl: './incidenteModal.component.html',
  styleUrls: ['./incidenteModal.component.css'],
})

// myModal: HTMLElement = document.getElementById('myModal');
export class IncidenteModalComponent implements OnInit, OnChanges {
  private fb = inject(FormBuilder);
  private tipoIncidentesService = inject(TipoIncidentesService);
  private estadoIncidentesService = inject(EstadoIncidentesService);
  private authService = inject(AuthService);

  // private emailValidatorService= inject(EmailValidatorService);
  private validatorService = inject(ValidatorsService);
  private incidentesService = inject(IncidentesService);

  public TipoIncidentes: TipoIncidentesMy[] = [];
  public EstadoIncidentes: EstadoIncidentesMy[] = [];

  @Input()
  IncidenteInput: undefined | any;
  @Input()
  BDIncidente!: string;

  @Output()
  closeModal: EventEmitter<boolean> = new EventEmitter();

  esAdmin: boolean = false;
  OnIncidente: boolean = false;
  usuarioRegistro: any;



  miFormulario: FormGroup = this.fb.group({
    id: [0],
    nombre: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    estado: [true, [Validators.required]],
    estadoIncidenteId: [0, [Validators.required]],
    tipoIncidenteId: [0, [Validators.required]],
    usuarioId: [1, [Validators.required]],
    usuarioNombre: ['', [Validators.required]],
    usuarioCorreo: ['', [Validators.required]],
    usuarioRevisionId: [1, [Validators.required]],
  });

  constructor() {}

  ngOnInit(): void {
    this.obtenerTipoIncidentes();
    this.obtenerEstadoIncidentes();

    if (this.authService.role() === 'ADMIN_ROLE') {
      this.esAdmin = true;
    } else {
      this.esAdmin = false;
    }

    this.usuarioRegistro = this.authService.usuarioLogueado();

    this.miFormulario.setValue({
      id: 0,
      nombre: '',
      descripcion: '',
      estado: true,
      estadoIncidenteId: 1,
      tipoIncidenteId: 1,
      usuarioId: this.usuarioRegistro.id,
      usuarioCorreo: this.usuarioRegistro.correo,
      usuarioNombre: this.usuarioRegistro.nombre,
      usuarioRevisionId: this.usuarioRegistro.id,
    });

    // console.log('valor init incidente', this.IncidenteInput);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.IncidenteInput !== undefined) {
      this.OnIncidente = true;
    } else {
      this.OnIncidente = false;
    }
    // console.log('hay incidente', this.OnIncidente);

    if (this.OnIncidente === true) {
      // console.log('Base de datos usada', this.BDIncidente);

      let {
        id,
        inc_nombre,
        inc_descripcion,
        inc_estado,
        inc_estadoIncidenteId,
        inc_tipoIncidenteId,
        inc_usuarioId,
        inc_usuario,
        inc_usuarioRevisionId,
        inc_tipoIncidente,
        inc_estadoIncidente,
        inc_usuarioRevision,
      } = this.IncidenteInput;

      if (this.BDIncidente === 'MONGO') {
        //Establecer los datos en el formulario a editar
        const { idMYSQL } = this.IncidenteInput;
        id = idMYSQL;
      }
      this.miFormulario.setValue({
        id: id,
        nombre: inc_nombre,
        descripcion: inc_descripcion,
        estado: inc_estado,
        tipoIncidenteId: inc_tipoIncidenteId,
        estadoIncidenteId: inc_estadoIncidenteId,
        usuarioId: inc_usuarioId,
        usuarioCorreo: inc_usuario.correo,
        usuarioNombre: inc_usuario.nombre,
        usuarioRevisionId: inc_usuarioRevisionId,
      });
    }
  }

  obtenerTipoIncidentes(): void {
    this.tipoIncidentesService
      .getTipoIncidentes()
      .subscribe(({ tipoIncidentesMy }) => {
        this.TipoIncidentes = tipoIncidentesMy;
      });
  }

  obtenerEstadoIncidentes(): void {
    this.estadoIncidentesService
      .getEstadoIncidentes()
      .subscribe(({ estadoIncidentesMy }) => {
        this.EstadoIncidentes = estadoIncidentesMy;
      });
  }


  onSubmit(): void {
    // event.preventDefault();
    let {
      nombre: inc_nombre,
      descripcion: inc_descripcion,
      estadoIncidenteId:inc_estadoIncidenteId,
      tipoIncidenteId,
      usuarioId: inc_usuarioId,
      usuarioRevisionId: inc_usuarioRevisionId,
    } = this.miFormulario.value;


    let inc_tipoIncidenteId=+tipoIncidenteId;


    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }



    let incidenteAEnviar = {
      inc_nombre,
      inc_descripcion,
      inc_estadoIncidenteId,
      inc_tipoIncidenteId,
      inc_usuarioId,
      inc_usuarioRevisionId,
    };

    if(this.OnIncidente===true){

    }else{
      console.log('Incidente a registrar',incidenteAEnviar);

      this.incidentesService
      .agregarIncidente(incidenteAEnviar)
      .subscribe((resp) => {
        Swal.fire('Incidente Registrado', resp.msg, 'success');
      });

    }



    //Limpiar Formulario
    // this.miFormulario.reset();
  }

  cerrarModal() {
    this.closeModal.emit(false);
    this.miFormulario.reset();
  }
}
