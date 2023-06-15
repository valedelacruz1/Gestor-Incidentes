import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioMy, UsuarioSesion } from 'src/app/auth/interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  private authService = inject(AuthService);
  public user: UsuarioSesion  = this.authService.usuarioLogueado()!;

  constructor(private router: Router) {
    // console.log(this.user);
  }

  logOut() {
    this.authService.logout();
  }
}
