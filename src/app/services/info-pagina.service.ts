import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

{}


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  public info: InfoPagina ;
  public cargada: boolean;
  public equipo: any[];

  constructor(public httCliente: HttpClient) {
    console.log('Servicio de info pagina funciona');

    this.info = {};
    this.cargarInformacion();
    this.cargarEquipo();
  }


   private cargarInformacion(){
      // leer archivo
    let url = 'assets/data/data-pagina.json';
    this.cargada = false;
    this.httCliente.get(url).subscribe((res: InfoPagina) => {
      console.log('data:', res);
      // console.log('data:', res['facebook']);
      this.cargada = false;
      this.info = res;
      console.log('this.info:', this.info);
    });
   }


  private cargarEquipo() {
    let url = 'https://angular-html-c7f64.firebaseio.com/equipo.json';
    this.httCliente.get(url).subscribe((res: any) => {
      console.log('res cargarEquipo', res);
      this.equipo = res;
    });
  }






}




