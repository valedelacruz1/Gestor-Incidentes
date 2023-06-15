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
import { Usuario } from 'src/app/auth/interfaces';

import { ValidatorsService } from 'src/app/shared/validators/validators.service';

@Component({
  selector: 'app-usuarioModal',
  templateUrl: './usuario-modal.component.html',
  styleUrls: ['./usuario-modal.component.css'],
})
export class UsuarioModalComponent {
  private fb = inject(FormBuilder);
  private validatorService = inject(ValidatorsService);

  @Input()
  UsuarioInput!: Usuario;

  @Output()
  modalOff: EventEmitter<boolean> = new EventEmitter();

  miFormulario: FormGroup = this.fb.group({
    id: [0],
    username: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    password: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    role: [0, [Validators.required]],
    tipoDocumento: [0, [Validators.required]],
    dependencia: [0, [Validators.required]],
  });

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.UsuarioInput.id !== 0) {
      const {
        id,
        nombre,
        apellido,
        username,
        correo,
        numDocumento,
        dependencia,
        role,
        tipoDocumento,
      } = this.UsuarioInput;

      this.miFormulario.setValue({
        id,
        nombre,
        apellido,
        username,
        correo,
        numDocumento,
        dependencia,
        role,
        tipoDocumento
      });
    }
  }

  onSubmit(): void {
    // event.preventDefault();
    const { rol_nombre, rol_descripcion } = this.miFormulario.value;

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
