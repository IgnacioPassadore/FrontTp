import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable()
export class BusquedasService {
  resourceUrl:string;
  constructor(private http: HttpClient) {this.resourceUrl = "";}

  //RegistrarAlumno(alumno:Alumno): Observable<Alumno> {
   // return this.http.post<Alumno>(`${this.resourceUrl}`, alumno).pipe(
      //map((response) => {
     //   return response;
    //  })
   // );
  //}
}
