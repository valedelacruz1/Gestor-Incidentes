import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './loginv2.component.html',
  styleUrls: [],
})
export class Loginv2Component {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  private router = inject(Router);

  public miFormulario: FormGroup = this.fb.group({
    username: ['test1', [Validators.required]],
    password: ['test1pass', [Validators.required, Validators.minLength(6)]],
  });

  constructor() {}

  login() {
    const { username, password } = this.miFormulario.value;

    this.authService.login(username, password).subscribe({
      next: () => {
        if (this.authService.role() === 'ADMIN_ROLE') {
          this.router.navigate(['/dashboard']);
          // console.log('Entro admin');
        } else {
          this.router.navigate(['/incidentes']);
          // console.log('Entro usuario');
        }
      },
      error: (error) => {
        Swal.fire('Error', error, 'error');
      },
    });
  }
}
