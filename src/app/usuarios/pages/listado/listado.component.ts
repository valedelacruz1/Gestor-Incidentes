import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../services/usuario.service';
import { Usuario } from 'src/app/auth/interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  usuarios: any[] = [];
  private usuariosService = inject(UsuariosService);

  public usuarioSeleccionado: Usuario = {
    id: 0,
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    telefono: '',
    numDocumento: '',
    correo: '',
    role: 0,
    tipoDocumento: 0,
    dependencia: 0,
    estado: true,
  };

  modalOn: Boolean = false;

  constructor() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.usuariosService
      .getUsuarios()
      .subscribe(({ usuariosMy, usuariosMo }) => {
        if (!usuariosMy) {
          this.usuarios = usuariosMo;
        } else {
          this.usuarios = usuariosMy;
        }
      });
  }

  crearRole() {}
  editarIncidente(rol: any) {
    console.log('Clickeado editar', rol.rol_nombre);
    this.usuarioSeleccionado = rol;
  }

  eliminarIncidente(usuario: Usuario) {
    console.log('Clickeado elimiar', usuario.nombre);
    this.usuarioSeleccionado = usuario;
  }

  onCloseModal(active: boolean) {
    this.modalOn = active;
    this.usuarioSeleccionado = {
      id: 0,
      username: '',
      password: '',
      nombre: '',
      apellido: '',
      telefono: '',
      numDocumento: '',
      correo: '',
      role: 0,
      tipoDocumento: 0,
      dependencia: 0,
      estado: true,
    };
  }
}
