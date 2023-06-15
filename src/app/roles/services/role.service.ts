import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RespRoles } from '../../interfaces/Roles.interface';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);
  private ApiUrl: string;

  constructor() {
    this.ApiUrl = 'api/roles';
  }

  getRoles(): Observable<RespRoles> {
    return this.http.get<RespRoles>(`${this.baseUrl}/${this.ApiUrl}`);
  }
}
