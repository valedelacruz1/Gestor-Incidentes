import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map, tap } from 'rxjs/operators';

import { RespEstadoIncidentes } from '../../interfaces/EstadoIncidentes.interface';

@Injectable({
  providedIn: 'root',
})
export class EstadoIncidentesService {
  private baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);
  private ApiUrl: string;

  constructor() {
    this.ApiUrl = 'api/estadoIncidentes';
  }

  getEstadoIncidentes(): Observable<RespEstadoIncidentes> {
    return this.http.get<RespEstadoIncidentes>(`${this.baseUrl}/${this.ApiUrl}`);
  }
}
