import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexadorService {

  private resourceUrl: string;

  constructor(private http: HttpClient) {
    this.resourceUrl = "http://localhost:8080/api";
  }

  subirDocumento(documento: File) {
    let formData = new FormData();
    formData.append("documento", documento);

    return this.http.post(`${this.resourceUrl}/documentos/indexador`, formData);
  }
}
