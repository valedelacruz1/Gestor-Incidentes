import { Component, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'dashboard-home',
  templateUrl: './home.component.html',

})
export class HomeComponent {


  private authService = inject(AuthService);
  public user:any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
     this.user=computed(()=>this.authService.usuarioLogueado());
  }


}

