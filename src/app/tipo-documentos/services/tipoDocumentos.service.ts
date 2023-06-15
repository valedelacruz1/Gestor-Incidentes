import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { RespTipoDocumentos } from 'src/app/interfaces/TipoDocumentos.interface';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class TipoDocumentosService {

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);
  private ApiUrl: string;

  constructor() {
    this.ApiUrl='api/tipoDocumentos';
   }

   getTipoDocumentos(): Observable<RespTipoDocumentos> {
    return this.http.get<RespTipoDocumentos>(`${this.baseUrl}/${this.ApiUrl}`);
  }
}
