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
import { Role, RoleEnvio } from 'src/app/interfaces/Roles.interface';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';

@Component({
  selector: 'app-roleModal',
  templateUrl: './role-modal.component.html',
  styleUrls: ['./role-modal.component.css'],
})
export class RoleModalComponent implements OnChanges {
  private fb = inject(FormBuilder);
  private validatorService = inject(ValidatorsService);

  @Input()
  RoleInput!: Role;

  @Output()
  modalOff: EventEmitter<boolean> = new EventEmitter();

  miFormulario: FormGroup = this.fb.group({
    id:[0],
    rol_nombre: ['', [Validators.required]],
    rol_descripcion: ['', [Validators.required]],
  });

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.RoleInput.id !== 0) {
      const { id, rol_nombre, rol_descripcion } = this.RoleInput;

      this.miFormulario.setValue({
        id:id,
        rol_nombre:rol_nombre,
        rol_descripcion:rol_descripcion
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
