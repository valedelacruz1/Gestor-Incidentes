import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map, tap } from 'rxjs/operators';
import { RespTipoIncidentes } from 'src/app/interfaces/TipoIncidentes.interface';



@Injectable({
  providedIn: 'root',
})
export class TipoIncidentesService {
  private baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);
  private ApiUrl: string;

  constructor() {

    this.ApiUrl = 'api/tipoIncidentes';
  }

  getTipoIncidentes(): Observable<RespTipoIncidentes> {
    return this.http.get<RespTipoIncidentes>(`${this.baseUrl}/${this.ApiUrl}`);
  }

}
