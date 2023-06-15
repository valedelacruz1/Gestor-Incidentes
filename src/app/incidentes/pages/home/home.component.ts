import { Component, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'incidentes-home',
  templateUrl: './home.component.html',

})
export class HomeComponent {
  showFiller = false;

  private authService = inject(AuthService);
  public user=computed(()=>this.authService.usuarioLogueado());

  // get user(){
  //   return this.authService.usuarioLogueado;
  // }


}
