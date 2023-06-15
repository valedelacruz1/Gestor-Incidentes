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

import { ValidatorsService } from 'src/app/shared/validators/validators.service';
import { Dependencia } from '../../../interfaces/Dependencias.interface';

@Component({
  selector: 'app-dependencia-modal',
  templateUrl: './dependencia-modal.component.html',
  styleUrls: ['./dependencia-modal.component.css']
})
export class DependenciaModalComponent implements OnChanges {
  private fb = inject(FormBuilder);
  private validatorService = inject(ValidatorsService);

  @Input()
  DependenciaInput!: Dependencia;

  @Output()
  modalOff: EventEmitter<boolean> = new EventEmitter();

  miFormulario: FormGroup = this.fb.group({
    id:[0],
    dep_nombre: ['', [Validators.required]],
    dep_descripcion: ['', [Validators.required]],
  });

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.DependenciaInput.id !== 0) {
      const { id, dep_nombre, dep_descripcion } = this.DependenciaInput;

      this.miFormulario.setValue({
        id:id,
        dep_nombre,
        dep_descripcion
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
