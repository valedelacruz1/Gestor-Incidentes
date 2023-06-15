import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstadoIncidente } from 'src/app/interfaces/EstadoIncidentes.interface';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';

@Component({
  selector: 'app-estadoIncidenteModal',
  templateUrl: './estado-incidente-modal.component.html',
  styleUrls: ['./estado-incidente-modal.component.css'],
})
export class EstadoIncidenteModalComponent implements OnChanges {
  private fb = inject(FormBuilder);
  private validatorService = inject(ValidatorsService);

  @Input()
  EstadoIncidenteInput!: EstadoIncidente;

  @Output()
  modalOff: EventEmitter<boolean> = new EventEmitter();

  miFormulario: FormGroup = this.fb.group({
    id:[0],
    rol_nombre: ['', [Validators.required]],
    rol_descripcion: ['', [Validators.required]],
  });

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.EstadoIncidenteInput.id !== 0) {
      const { id, est_nombre, est_descripcion } = this.EstadoIncidenteInput;

      this.miFormulario.setValue({
        id:id,
        rol_nombre:est_nombre,
        rol_descripcion:est_descripcion
      })
    }
  }



  onSubmit(): void {
    // event.preventDefault();
    const { est_nombre, est_descripcion} = this.miFormulario.value;

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);

    //Limpiar Formulario
    // this.miFormulario.reset();
  }

  cerrarModal() {
    this.modalOff.emit(false);
    this.miFormulario.reset();
  }

}
