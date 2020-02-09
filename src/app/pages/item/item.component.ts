import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/info-pagina.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  public anio: number;
  public producto: ProductoDescripcion;
  public id: string;

  // tslint:disable-next-line: max-line-length
  constructor(public infoPaginaService: InfoPaginaService, private activatedRoute: ActivatedRoute, private router: Router, public productoService: ProductosService) {

    this.anio = new Date().getFullYear();
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe((parametrosURL) => {
      console.log('parametrosURL: ', parametrosURL);
      // console.log('parametrosURL: ', parametrosURL['aca va el parametro q pusimos en la ruta']);
      console.log('parametrosURL: ', parametrosURL['id']);
      this.productoService.getProducto(parametrosURL['id']).subscribe((res: ProductoDescripcion) => {
        this.id = parametrosURL['id'];
        this.producto = res;
        console.log(' this.id : ', this.id);
        console.log('this.producto: ', this.producto);
        console.log('res del parametro y metodo getProducto: ', res);
      });

    });


  }

}
