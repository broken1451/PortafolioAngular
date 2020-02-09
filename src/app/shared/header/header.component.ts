import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { InfoPagina } from '../../interfaces/info-pagina.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public info: InfoPagina;

  constructor(public infoPaginaService: InfoPaginaService, private router:Router) {
  }

  ngOnInit() {
    this.info = this.infoPaginaService.info;
    console.log(this.info);
  }

  buscarProducto(inputTexto: string) {

    if (inputTexto.length < 1) {
      console.log(inputTexto.length);
      return;
    }

    this.router.navigate(['search', inputTexto]);
    console.log(inputTexto);
  }


}
