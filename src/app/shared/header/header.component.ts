import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { InfoPagina } from '../../interfaces/info-pagina.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public info: InfoPagina;

  constructor(public infoPaginaService: InfoPaginaService) {
  }

  ngOnInit() {
    this.info = this.infoPaginaService.info;
    console.log(this.info);
  }




}
