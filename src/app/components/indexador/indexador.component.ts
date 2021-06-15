import { Component, OnInit } from '@angular/core';
import { IndexadorService } from 'src/app/services/indexador.service';

@Component({
  selector: 'app-indexador',
  templateUrl: './indexador.component.html',
  styleUrls: ['./indexador.component.css']
})
export class IndexadorComponent implements OnInit {

  documentoSeleccionado?: File;

  constructor(private indexadorService: IndexadorService) { }

  ngOnInit(): void {

  }

  seleccionarDocumento(event: any) {
    this.documentoSeleccionado = event.target.files[0];    
  }

  subirDocumento() {
    if (! this.documentoSeleccionado) {
      alert('No se seleccionó el documeto');
    } else {
      console.log("algo");
      
      this.indexadorService.subirDocumento(this.documentoSeleccionado).subscribe(response => {
        console.log(response);
        alert('Documento indexado con éxito');
      }, err => {
        alert(err.error.error);
      })
    }

  }

}
