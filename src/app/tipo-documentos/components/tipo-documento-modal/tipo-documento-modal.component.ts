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
import { TipoDocumento } from 'src/app/interfaces/TipoDocumentos.interface';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';

@Component({
  selector: 'app-tipoDocumentoModal',
  templateUrl: './tipo-documento-modal.component.html',
  styleUrls: ['./tipo-documento-modal.component.css']
})
export class TipoDocumentoModalComponent {
  private fb = inject(FormBuilder);
  private validatorService = inject(ValidatorsService);

  @Input()
  TipoDocumentoInput!: TipoDocumento;

  @Output()
  modalOff:EventEmitter<boolean>= new EventEmitter();

  miFormulario:FormGroup= this.fb.group({
    id:[0],
    tdoc_nombre:['',[Validators.required]],
    tdoc_descripcion:['',[Validators.required]],

  });

  constructor(){

  }

  ngOnChanges(changes: SimpleChanges): void {


    if (this.TipoDocumentoInput.id !== 0) {
      const { id, tdoc_nombre, tdoc_descripcion } = this.TipoDocumentoInput;

      this.miFormulario.setValue({
        id:id,
        tdoc_nombre:tdoc_nombre,
        tdoc_descripcion:tdoc_descripcion
      })
    }
  }


  onSubmit(): void {
    // event.preventDefault();
    const { rol_nombre, rol_descripcion} = this.miFormulario.value;

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
