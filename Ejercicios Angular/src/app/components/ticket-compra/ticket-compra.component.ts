import { Component } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { LinProducto } from '../../interfaces/lin-producto.interface';
import { DecimalPipe, NgFor, NgIf } from '@angular/common';
import { TarjetaProductoComponent } from "../tarjeta-producto/tarjeta-producto.component";

@Component({
  selector: 'app-ticket-compra',
  standalone: true,
  imports: [NgFor, DecimalPipe, NgIf, TarjetaProductoComponent],
  templateUrl: './ticket-compra.component.html',
  styleUrl: './ticket-compra.component.css'
})
export class TicketCompraComponent {

  carroCompra: LinProducto[] = [];
  lineaProducto!: LinProducto;
  catalogo!: Producto[];
  productoAComprar!: Producto;
  totalCompra: number = 0;

  ngOnInit(): void {
    this.catalogo = [
      {id: 1  ,name: 'RadioCassette',descripcion: 'Para escuchar tus mejores canciones',precio: 5,img: 'https://static.carrefour.es/hd_510x_/crs/cdn_static/catalog/hd/338820_00_1.jpg'},
      {id: 2  ,name: 'FIFA',descripcion: 'Perfecto para destrozar tu relacion',precio: 25, img: 'https://i.ytimg.com/vi/pBM2xyco_Kg/maxresdefault.jpg'},
      {id: 3  ,name: 'Portatil MSI',descripcion: 'Para vosotros Gamers',precio: 80.2, img: 'https://m.media-amazon.com/images/I/713dZHEY2YL._AC_UF894,1000_QL80_.jpg'},
      {id: 4  ,name: 'Monitor LG',descripcion: 'Monitor calidad-precio perfecto',precio: 125,img:'https://media.ldlc.com/r1600/ld/products/00/06/14/40/LD0006144034.jpg'},
      {id: 5  ,name: 'Procesador',descripcion: 'El mejor procesador del mercado',precio: 300.28,img: 'https://t7m8e9c8.rocketcdn.me/wp-content/uploads/2020/07/especificaciones-procesadores-intel-alder-lake.jpg'},
    
    ]

  }


  agregarProductoCarro(producto: Producto) {
    let lineaExistente = this.carroCompra.find(linea => linea.producto.id === producto.id);

    if (lineaExistente) {
      lineaExistente.cantidad++;
      lineaExistente.valorTotal = this.calcularLinea(lineaExistente);
    } else {
      let linea: LinProducto = {
        cantidad: 1,
        producto: producto,
        valorTotal: producto.precio
      }
      this.carroCompra.push(linea)
    }
    this.totalCompra += producto.precio;

  }
  calcularLinea(linea: LinProducto) {
    return linea.producto.precio * linea.cantidad;

  }

  eliminarProductoCarro(producto: Producto) {

    let lineaExistente = this.carroCompra.find(linea => linea.producto.id === producto.id);

    if (lineaExistente && lineaExistente.cantidad > 0 ) {
      lineaExistente.cantidad--;
      lineaExistente.valorTotal = this.calcularLinea(lineaExistente);
      this.totalCompra -= producto.precio;
    }

  }


}

