import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-comentarios',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-comentarios.component.html',
  styleUrl: './agregar-comentarios.component.css'
})
export class AgregarComentariosComponent {

  @Output () enviarComentario = new EventEmitter<string>();
  comentario!: string;

  agregarComentario(){
    this.enviarComentario.emit(this.comentario)
  }
}
