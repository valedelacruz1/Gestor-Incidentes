import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import {
  ObtenerUsuarioResp,
  RespUsuarios,
  UsuarioMy,
} from '../../auth/interfaces/Usuarios.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);
  private ApiUrl: string;

  constructor() {
    this.ApiUrl = 'api/usuarios';
  }

  getUsuarios(): Observable<RespUsuarios> {
    return this.http.get<RespUsuarios>(`${this.baseUrl}/${this.ApiUrl}`);
  }

  getUser(user: number): Observable<ObtenerUsuarioResp> {
    return this.http.get<any>(`${this.baseUrl}/${this.ApiUrl}/${user}`);
  }
}
