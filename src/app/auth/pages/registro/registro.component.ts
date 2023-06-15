import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { AuthService } from '../../services/auth.service';
import { UsuarioEnvio } from '../../interfaces/Usuarios.interface';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: []
})
export class RegistroComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['jsmith', [Validators.required, Validators.minLength(3)]],
    correo: ['test1@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
    telefono: ['3223080414', [Validators.required, Validators.minLength(7)]]
  })

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  registro() {

    const { nombre,apellido,numDocumento,tipoDocumento,dependencia, correo, password, telefono,username} = this.miFormulario.value;
    const role = 2;

    const usuarioEnv: UsuarioEnvio = {
      apellido,
      correo,
      dependencia,
      nombre,
      numDocumento,
      password,
      role,
      telefono,
      tipoDocumento,
      username,
    }


    this.authService.registro(usuarioEnv).subscribe((resp) => {
      console.log(resp);
      if (resp.ok === true) {
        this.router.navigateByUrl('/productos');
      } else {
        // TODO: MOSTRAR MENSAJE DE ERROR

        Swal.fire('Error', resp.msg, 'error')
      }


    })




  }

}
