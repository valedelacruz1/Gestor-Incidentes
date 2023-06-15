import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable, of, throwError,catchError, map, tap } from 'rxjs';

import {
  AuthResponse,
  UsuarioEncontrado,
  UsuarioRegist,
  UsuarioMy,
  UsuarioEnvio,
  CheckTokenResp,
  TiempoTokenResp,
  AuthStatus,
  UsuarioSesion,
  UsuarioToken,
  UsuarioMo,
} from '../interfaces/index';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);

  private _usuarioLogueado = signal<UsuarioSesion | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);
  private _role = signal<string | null>('');

  //! Al mundo Exterior
  public usuarioLogueado = computed(() => this._usuarioLogueado());
  public authStatus = computed(() => this._authStatus());
  public role = computed(() => this._role());

  constructor() {
    this.checkAuthStatus().subscribe();
  }

  private setAuthentication(usuario: UsuarioToken, token?: string): boolean {
    this._usuarioLogueado.set(usuario);
    this._authStatus.set(AuthStatus.authenticated);
    this._role.set(usuario.role);
    if (token) {
      localStorage.setItem('x-token', token);
    }
    return true;
  }

  login(username: string, password: string): Observable<boolean> {
    const url = `${this.baseUrl}/api/auth/login`;
    const body = { username, password };

    return this.http.post<AuthResponse>(url, body).pipe(
      tap(({ usuarioMy, usuarioMo, role, token }) => {
        this.setAuthentication(
          this.retornarUsuarioSession(usuarioMy, usuarioMo),
          token
        );
      }),
      map(() =>   true  ),

      catchError(err => throwError(() => err.error.msg) )
    );
  }

  registro(usuarioEnv: UsuarioEnvio) {
    const url = `${this.baseUrl}/api/usuarios`;

    return this.http.post<UsuarioRegist>(url, usuarioEnv).pipe(
      // map(({ usuario, role }) =>
      //   // this.setAuthentication(this.retornarUsuarioSession(usuario), role)
      // ),
      catchError((err) => of(err.error.msg))
    );
  }

  checkAuthStatus(): Observable<boolean> {
    // Api proveedora
    const url = `${this.baseUrl}/api/auth/renew`;
    const token = localStorage.getItem('x-token');

    if (token===null) {
      this.logout();
      return of(false);
    }

    if (token) {
      this.validarTiempoToken(token).subscribe(({ ok, msg }) => {
        if (ok === false) {
          console.log('tokenExpirado');
          this.logout();
          return of(false);
        } else {
          return of(true);
        }
      });
    }

    //Parametros headers a preguntar
    const headers = new HttpHeaders().set('x-token', token);

    return this.http.get<CheckTokenResp>(url, { headers }).pipe(
      map(({ usuario, token }) => this.setAuthentication(usuario, token)),
      catchError(() => {
        this._authStatus.set(AuthStatus.notAuthenticated);
        return of(false);
      })
    );
  }

  logout() {
    localStorage.removeItem('x-token');
    this._usuarioLogueado.set(null);
    this._authStatus.set(AuthStatus.notAuthenticated);
    this._role.set('');
  }

  validarAdmin(): Observable<boolean> {
    const { id }: any = this.usuarioLogueado;
    const url = `${this.baseUrl}/api/usuarios/${id}`;

    return this.http.get<UsuarioEncontrado>(url).pipe(
      map(({ usuarioMy, usuarioMo }) => {
        if (usuarioMy.role.id === 1 || usuarioMo.role.idMYSQL === 1) {
          return true;
        } else {
          return false;
        }
      }),
      catchError((err) => of(false))
    );
  }

  validarTiempoToken(token: string): Observable<TiempoTokenResp> {
    const url = `${this.baseUrl}/api/auth/expired`;

    const headers = new HttpHeaders().set('x-token', token);
    return this.http.get<TiempoTokenResp>(url, { headers });
  }

  retornarUsuarioSession(
    usuario: UsuarioMy,
    usuarioMo: UsuarioMo
  ): UsuarioToken {
    let usuarioSession;
    if (usuario !== null) {
      const { id, username, nombre, apellido, role, correo, ...data } = usuario;
      usuarioSession = {
        id,
        username,
        nombre,
        apellido,
        role: role.rol_nombre,
        correo,
      };
    } else {
      const {
        idMYSQL: id,
        username,
        nombre,
        apellido,
        role,
        correo,
        ...dataMo
      } = usuarioMo;
      usuarioSession = {
        id,
        username,
        nombre,
        apellido,
        role: role.rol_nombre,
        correo,
      };
    }

    return usuarioSession;
  }
}
