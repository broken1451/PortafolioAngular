import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, public productoService: ProductosService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((parametrosURL: any) => {
      console.log('parametrosURL del search component', parametrosURL);
      console.log('parametrosURL[termino] del search component', parametrosURL['termino']);
      this.productoService.buscarProducto(parametrosURL['termino']);
    });
  }



}
