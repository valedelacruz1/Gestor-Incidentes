import { Component, inject } from '@angular/core';
import {
  RolesMo,
  RolesMy,
  RoleEnvio,
  Role,
} from 'src/app/interfaces/Roles.interface';
import { RolesService } from '../../services/role.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  roles: RolesMy[] = [];
  rolesMo: RolesMo[] = [];

  private rolesService = inject(RolesService);

  public roleSeleccionado: Role = {
    id: 0,
    rol_nombre: '',
    rol_descripcion: '',
    rol_estado: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  modalOn: Boolean = false;

  constructor() {
    this.obtenerRoles();
  }

  obtenerRoles() {
    this.rolesService.getRoles().subscribe(({ rolesMy, rolesMo }) => {
      if (!rolesMy) {
        this.rolesMo = rolesMo;
      } else {
        this.roles = rolesMy;
      }
    });
  }

  crearRole() {}
  editarIncidente(rol: any) {
    console.log('Clickeado editar', rol.rol_nombre);
    this.roleSeleccionado = rol;
  }

  eliminarIncidente(rol: any) {
    console.log('Clickeado elimiar', rol.rol_nombre);
    this.roleSeleccionado = rol;
  }

  onCloseModal(active: boolean) {
    this.modalOn = active;
    this.roleSeleccionado = {
      id: 0,
      rol_nombre: '',
      rol_descripcion: '',
      rol_estado: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
