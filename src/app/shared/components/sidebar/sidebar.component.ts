import { Component, inject, OnInit } from '@angular/core';


import { AuthService } from 'src/app/auth/services/auth.service';
import { AuthRole } from '../../../auth/interfaces/auth-role.enum';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent  {

  private authService = inject(AuthService);

  public adminMenu: MenuItem[] = [
    { title: 'Dashboard Home', route: 'home'},
    { title: 'Incidentes', route: 'incidentes' },
    { title: 'Tipo Incidentes', route: 'tipoIncidentes' },
    { title: 'Estado Incidentes', route: 'estadoIncidentes' },
    { title: 'Usuarios', route: 'usuarios' },
    { title: 'Roles', route: 'roles' },
    { title: 'Dependencias', route: 'dependencias' },
    { title: 'Tipo Documentos', route: 'tipoDocumentos' },
  ];

  public userMenu: MenuItem[] = [
    { title: 'Dashboard Home', route: 'home' },
    { title: 'Incidentes', route: 'incidentes' },
    // { title: 'Perfil', route: 'usuarios/perfil' },
  ];

  constructor() {}



  checkAdmin() {

    if (this.authService.role() === AuthRole.admin) {
      return true;
    } else {
      return false;
    }
  }



}
