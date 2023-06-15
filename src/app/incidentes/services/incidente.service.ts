import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import {
  RespIncidentes,
  RespIncidente,
  IncidenteEnvio,
  RespAddIncidente,
  IncidenteActEnvio,
  RespActIncidente,
  RespDelIncidente,
} from '../../interfaces/Incidentes.interface';

@Injectable({
  providedIn: 'root',
})
export class IncidentesService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);
  private ApiUrl: string;

  constructor() {
    this.ApiUrl = 'api/incidentes';
  }

  getIncidentes(): Observable<RespIncidentes> {
    const url = `${this.baseUrl}/${this.ApiUrl}`;

    return this.http
      .get<RespIncidentes>(url)
      .pipe(catchError((err) => of(err.error.msg)));
  }

  getIncidentesPorUsuario(idUsuario: number,tipoIncidente:number,estadoIncidente:number,estado:boolean): Observable<RespIncidentes> {
  const url =`${this.baseUrl}/api/buscar/incidentesUsuario/${idUsuario}?tipoIncidente=${tipoIncidente}&estadoIncidente=${estadoIncidente}&estado=${estado}`;


    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('x-token') || ''
    );

    return this.http
      .get<RespIncidentes>(url,{ headers })
      .pipe(catchError((err) => of(err.error.msg)));
  }
  //ADMIN
  getIncidentesPorTipoEstado(idTipoIncidente: number,idEstadoIncidente:number,estado:boolean): Observable<RespIncidentes> {
    const url = `${this.baseUrl}/api/buscar/incidentesTipoEstado/${idTipoIncidente}?estadoIncidente=${idEstadoIncidente}&estado=${estado}`;


    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('x-token') || ''
    );

    return this.http
      .get<RespIncidentes>(url,{ headers })
      .pipe(catchError((err) => of(err.error.msg)));
  }

  getIncidentePorId(id: string): Observable<RespIncidente> {
    return this.http
      .get<RespIncidente>(`${this.baseUrl}/${this.ApiUrl}/${id}`)
      .pipe(catchError((err) => of(err.error.msg)));
  }

  agregarIncidente(incidente: IncidenteEnvio): Observable<RespAddIncidente> {
    const url = `${this.baseUrl}/${this.ApiUrl}`;

    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('x-token') || ''
    );

    return this.http.post<RespAddIncidente>(url, incidente, { headers });
  }

  actualizarIncidente(incidente: IncidenteActEnvio) {
    const url = `${this.baseUrl}/incidentes/${incidente.id}`;

    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('x-token') || ''
    );

    return this.http.put<RespActIncidente>(url, incidente, { headers });
  }

  borrarProducto(id: string) {
    const url = `${this.baseUrl}/incidentes/${id}`;

    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('x-token') || ''
    );

    return this.http.delete<RespDelIncidente>(url, { headers });
  }
}
