import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ConsultaRequest } from '../models/ConsultaRequest';
@Injectable()
export class BusquedasService {
  resourceUrl:string;
  constructor(private http: HttpClient) {this.resourceUrl = "http://localhost:8080";}

  
  
  BuscarDocumentos(consulta:ConsultaRequest): Observable<any> {
    return this.http.post<ConsultaRequest>(`${this.resourceUrl}`, ConsultaRequest).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
