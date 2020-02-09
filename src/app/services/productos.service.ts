import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public productos: Producto[];
  public cargando: boolean;

  constructor(private httCient: HttpClient) {
    this.cargando = true;
    this.cargarProducto();
  }




  private cargarProducto() {
   let url = 'https://angular-html-c7f64.firebaseio.com/productos_idx.json';
   this.httCient.get(url).subscribe((res: Producto[]) => {
      console.log('res productos: ', res);
      this.productos = res;
      setTimeout(() => {
        this.cargando = false;
      }, 2000);
   });
  }




}
