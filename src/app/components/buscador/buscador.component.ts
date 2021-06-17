import { Component, OnInit } from '@angular/core';
import { ConsultaRequest } from 'src/app/models/ConsultaRequest';
import { RankingDocumento } from 'src/app/models/RankingDocumento';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BusquedaService } from 'src/app/services/busqueda.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  FormFiltro: FormGroup= this.formBuilder.group({consulta:[""]});
  ranking: RankingDocumento[]= [];
  totalPag: number =0;
  size: number = 0;
  totalDocumentos:number=0;
  pagina: number=0;
  cargados:number=0;
  msg: string = "";

  constructor(public formBuilder: FormBuilder, private busquedaService: BusquedaService) { }

  ngOnInit(): void {
    
  }

  buscarDocumentos():void{
    let consultaRequest: ConsultaRequest = new ConsultaRequest();
    consultaRequest.consulta= this.FormFiltro?.controls.consulta.value;
    consultaRequest.page=this.pagina - 1 < 0 ? 0 : this.pagina - 1;

    console.log(consultaRequest.page);
    

    this.busquedaService.BuscarDocumentos(consultaRequest).subscribe((data)=>{
      console.log(data);
      
      this.ranking=data.ranking.content as RankingDocumento[];
      this.totalPag=data.ranking.totalPages;
      this.size = data.ranking.size;
      this.totalDocumentos=data.ranking.totalElements;
      this.cargados=1;

    }, err => {
      this.ranking = [];
      this.cargados = 2;
      this.msg = err.error.mensaje;
    });
  }

}
