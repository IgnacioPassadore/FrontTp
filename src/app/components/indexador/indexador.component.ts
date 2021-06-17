import { Component, OnInit } from '@angular/core';
import { IndexadorService } from 'src/app/services/indexador.service';
import Swal from 'sweetalert2';

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
      Swal.fire({
        text: 'No se seleccionó ningún documento',
        icon: 'warning'
      });
    } else {
      
      this.indexadorService.subirDocumento(this.documentoSeleccionado).subscribe((response: any) => {
        console.log(response);
        Swal.fire({
          text: response.mensaje,
          icon: 'success'
        });
      }, err => {
        
        Swal.fire({
          title: err.error.mensaje,
          text: err.error.error,
          icon: 'error',
        });
      })
    }

  }

}
