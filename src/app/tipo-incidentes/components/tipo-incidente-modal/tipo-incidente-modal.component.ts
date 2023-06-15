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
import { TipoIncidente } from 'src/app/interfaces/TipoIncidentes.interface';

import { ValidatorsService } from 'src/app/shared/validators/validators.service';

@Component({
  selector: 'app-tipoIncidenteModal',
  templateUrl: './tipo-incidente-modal.component.html',
  styleUrls: ['./tipo-incidente-modal.component.css']
})
export class TipoIncidenteModalComponent {
  private fb = inject(FormBuilder);
  private validatorService = inject(ValidatorsService);


  @Input()
  TipoIncidenteInput!: TipoIncidente;

  @Output()
  modalOff:EventEmitter<boolean>= new EventEmitter();

  miFormulario:FormGroup= this.fb.group({
    id:[0],
    tinc_nombre:['',[Validators.required]],
    tinc_descripcion:['',[Validators.required]],

  });

  constructor(){

  }

  ngOnChanges(changes: SimpleChanges): void {


    if (this.TipoIncidenteInput.id !== 0) {
      const { id, tinc_nombre, tinc_descripcion } = this.TipoIncidenteInput;

      this.miFormulario.setValue({
        id:id,
        tinc_nombre:tinc_nombre,
        tinc_descripcion:tinc_descripcion
      })
    }
  }


  onSubmit(): void {
    // event.preventDefault();
    const { tinc_nombre, tinc_descripcion} = this.miFormulario.value;

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
