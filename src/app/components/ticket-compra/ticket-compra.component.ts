import { Component } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { LinProducto } from '../../interfaces/lin-producto.interface';
import { DecimalPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-ticket-compra',
  standalone: true,
  imports: [NgFor, DecimalPipe,NgIf],
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
      { id: 1, name: 'RadioCassette', descripcion: 'Para escuchar tus mejores canciones', precio: 5 },
      { id: 2, name: 'FIFA', descripcion: 'Perfecto para destrozar tu relacion', precio: 25 },
      { id: 3, name: 'Portatil MSI', descripcion: 'Para vosotros Gamers', precio: 80.2 },
      { id: 4, name: 'Monitor LG', descripcion: 'Monitor calidad-precio perfecto', precio: 125 },
      { id: 5, name: 'Procesador', descripcion: 'El mejor procesador del mercado', precio: 300.28 },
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

