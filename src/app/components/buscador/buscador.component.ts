import { Component, OnInit } from '@angular/core';
import { BusquedasService } from 'src/app/services/BusquedasService';
import { ConsultaRequest } from 'src/app/models/ConsultaRequest';
import { Documento } from 'src/app/models/Documento';
import { RankingDocumento } from 'src/app/models/RankingDocumento';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  FormFiltro: FormGroup= this.formBuilder.group({consulta:[""]});
  //FormRes: FormGroup | undefined;
  ranking: RankingDocumento[]= [];
  totalPag: number =0;
  totalDocumentos:number=0;
  pagina: number=0;
  cargados:boolean=false;
  constructor(public formBuilder: FormBuilder, private busquedaService: BusquedasService) { }

  ngOnInit(): void {
    this.FormFiltro=this.formBuilder.group({consulta:[""]});
    //this.FormRes = this.formBuilder.group({
    //  Titulo: [""],
    //  Url:[""],
    //  IR:[null]});
  }
  buscarDocumentos():void{
    let consultaRequest: ConsultaRequest = new ConsultaRequest();
    consultaRequest.consulta= this.FormFiltro?.controls.consulta.value;
    consultaRequest.page= this.pagina;
    this.busquedaService.BuscarDocumentos(consultaRequest).subscribe((data)=>{
      this.ranking=data.content as RankingDocumento[];
      this.totalPag=data.totalPages;
      this.totalDocumentos=data.totalElements;
      this.cargados=true;
    })
  }

}
