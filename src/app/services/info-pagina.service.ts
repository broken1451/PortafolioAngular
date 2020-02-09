import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

{}


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  public info: InfoPagina ;
  public caragada: boolean;

  constructor(public httCliente: HttpClient) {
    console.log('Servicio de info pagina funciona');

    this.info = {};

    // leer archivo
    let url = 'assets/data/data-pagina.json';
    this.caragada = false;
    this.httCliente.get(url).subscribe((res: InfoPagina) => {
      console.log('data:', res);
      // console.log('data:', res['facebook']);
      this.caragada = false;
      this.info = res;
      console.log('this.info:', this.info);
    });
  }









}




