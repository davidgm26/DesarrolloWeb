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
  {id: 1  ,name: 'RadioCassette',descripcion: 'Para escuchar tus mejores canciones',precio: 5},
  {id: 2  ,name: 'FIFA',descripcion: 'Perfecto para destrozar tu relacion',precio: 25},
  {id: 3  ,name: 'Portatil MSI',descripcion: 'Para vosotros Gamers',precio: 80.2},
  {id: 4  ,name: 'Monitor LG',descripcion: 'Monitor calidad-precio perfecto',precio: 125},
  {id: 5  ,name: 'Procesador',descripcion: 'El mejor procesador del mercado',precio: 300.28},

]
}

}
