import { Component } from '@angular/core';
import { TarjetaProductoComponent } from "../tarjeta-producto/tarjeta-producto.component";
import { NgFor } from '@angular/common';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-lista-producto',
  standalone: true,
  imports: [TarjetaProductoComponent, NgFor],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent {

listaProductos!: Producto [] ;

ngOnInit(): void {
this.listaProductos = [
  {id: 1  ,name: 'RadioCassette',descripcion: 'Para escuchar tus mejores canciones',precio: 5,img: 'https://static.carrefour.es/hd_510x_/crs/cdn_static/catalog/hd/338820_00_1.jpg'},
  {id: 2  ,name: 'FIFA',descripcion: 'Perfecto para destrozar tu relacion',precio: 25, img: 'https://i.ytimg.com/vi/pBM2xyco_Kg/maxresdefault.jpg'},
  {id: 3  ,name: 'Portatil MSI',descripcion: 'Para vosotros Gamers',precio: 80.2, img: 'https://m.media-amazon.com/images/I/713dZHEY2YL._AC_UF894,1000_QL80_.jpg'},
  {id: 4  ,name: 'Monitor LG',descripcion: 'Monitor calidad-precio perfecto',precio: 125,img:'https://media.ldlc.com/r1600/ld/products/00/06/14/40/LD0006144034.jpg'},
  {id: 5  ,name: 'Procesador',descripcion: 'El mejor procesador del mercado',precio: 300.28,img: 'https://t7m8e9c8.rocketcdn.me/wp-content/uploads/2020/07/especificaciones-procesadores-intel-alder-lake.jpg'},

]
}

}
