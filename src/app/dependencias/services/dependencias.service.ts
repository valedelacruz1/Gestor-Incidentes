import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { RespDependencias } from 'src/app/interfaces/Dependencias.interface';

@Injectable({ providedIn: 'root' })
export class DependenciasService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);
  private ApiUrl: string;

  constructor() {
    this.ApiUrl = 'api/dependencias';
  }

  getDependencias(): Observable<RespDependencias> {
    return this.http.get<RespDependencias>(`${this.baseUrl}/${this.ApiUrl}`);
  }
}
