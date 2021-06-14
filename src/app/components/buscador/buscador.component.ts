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

  //FormFiltro: FormGroup;
  constructor(/*public formBuilder: FormBuilder,*/) { }

  ngOnInit(): void {
    //this.FormFiltro = this.formBuilder;
  }

}
