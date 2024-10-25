import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AgregarComentariosComponent } from "../agregar-comentarios/agregar-comentarios.component";

@Component({
  selector: 'app-lista-comentarios',
  standalone: true,
  imports: [NgFor, AgregarComentariosComponent],
  templateUrl: './lista-comentarios.component.html',
  styleUrl: './lista-comentarios.component.css'
})
export class ListaComentariosComponent {

  listaComentarios: string [] = ['Tengo ganas de ir a casa de manoli','Voy a jugar a la pelota', 'Mi primo Pablo no sabe comer sentado'];

  
  agregarComentarioALista(comentario: string){
    this.listaComentarios.push(comentario);
  }

  borrarComentarioLista(){
    this.listaComentarios.pop();
  }
}
