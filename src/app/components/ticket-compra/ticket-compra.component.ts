import { Component } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { LinProducto } from '../../interfaces/lin-producto.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ticket-compra',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ticket-compra.component.html',
  styleUrl: './ticket-compra.component.css'
})
export class TicketCompraComponent {

  carroCompra!: LinProducto[];
  lineaProducto!: LinProducto;
  catalogo!: Producto[];
  productoAComprar!: Producto;

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
    if (this.carroCompra.length == 0) {
      let linea: LinProducto = {
        cantidad: 1,
        producto: producto,
        valorTotal: producto.precio * 1
      }
      this.carroCompra.push(linea)
    }
    this.carroCompra.forEach(linea => {
      if (linea.producto == producto) {
        linea.cantidad++;
        linea.valorTotal = this.calcularLinea(linea);
      }
    })
  }

  calcularLinea(linea: LinProducto) {
    return linea.valorTotal = this.lineaProducto.producto.precio * this.lineaProducto.valorTotal;
  }

  EliminarProducto() {


  }



}
