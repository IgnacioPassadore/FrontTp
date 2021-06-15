import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConsultaRequest } from '../models/ConsultaRequest';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
  resourceUrl:string;
  constructor(private http: HttpClient) {
    this.resourceUrl = "http://localhost:8080/api";
  }

  BuscarDocumentos(consulta:ConsultaRequest): Observable<any> {
    return this.http.post<ConsultaRequest>(`${this.resourceUrl}/buscador`, consulta).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
