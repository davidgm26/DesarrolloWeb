import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-de-comentarios',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lista-de-comentarios.component.html',
  styleUrl: './lista-de-comentarios.component.css'
})
export class ListaDeComentariosComponent {

  listaComentarios: String[] = [
    'Hoy a Pablo le apetecia comer Salmon',
    'Mis zapatos son de color azul',
    'Tu vestido me encanta,¿Es de Zara?',
    'Tengo antojo de papas fritas con huevo.',
    'Me encanta la música de la banda de rock Queen',
    'Al Sevilla ayer le encajaron 5 goles'
  ];


}
