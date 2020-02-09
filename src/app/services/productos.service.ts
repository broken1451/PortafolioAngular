import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public productos: Producto[];
  public productosFiltrados: Producto[];
  public cargando: boolean;

  constructor(private httCient: HttpClient) {
    this.cargando = true;
    this.cargarProducto();
  }




  private cargarProducto() {

     return new Promise((resolve, reject) => {

      let url = 'https://angular-html-c7f64.firebaseio.com/productos_idx.json';
      this.httCient.get(url).subscribe((res: Producto[]) => {
         console.log('res productos: ', res);
        //  setTimeout(() => {
        //    this.productos = res;
        //    this.cargando = false;
        //    resolve();
        //  }, 2000);
         this.productos = res;
         this.cargando = false;
         resolve();

       });
     });




  }


  getProducto(id: string) {
    let url = `https://angular-html-c7f64.firebaseio.com/productos/${id}.json`;
    return this.httCient.get(url);
  }


  buscarProducto(termino: string) {

    if (this.productos.length === 0 ) {
        // Esperar que esten cargados los productos
        this.cargarProducto().then(() => {
            // despues de tener los productos te ejecutas
            // aplicar el filtro
            this.filtrarProductos(termino);
        });
    } else {
      // aplica el filtro
      this.filtrarProductos(termino);
    }
    // this.productos.filter() el filter permite barrer el arreglo y regresar un nuevo arreglo 
    // this.productosFiltrados = this.productos.filter((producto) => {
    //   console.log('producto del filter en producto serice: ', producto);
    //   return  producto;
    // });
    // console.log('this.productosFiltrados en producto serice: ', this.productosFiltrados);

  }

  private filtrarProductos(termino: string) {
    // solo se va a ejecuat siempre que tengamos data
    console.log('filtrarProductos() termino: ', termino);
    this.productosFiltrados = [];
    termino = termino.toLowerCase();

    this.productos.forEach((producto) => {
      console.log('producto() : ', producto);
      let tituloLower = producto.titulo.toLowerCase();

      // if (producto.categoria.indexOf(si contiene algo del termino)) {
      if (producto.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.productosFiltrados.push(producto);
      }

    });
    console.log('this.productosFiltrados () : ', this.productosFiltrados );
  }




}
