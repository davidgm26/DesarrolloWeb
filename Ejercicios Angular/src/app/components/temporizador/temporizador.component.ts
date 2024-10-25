import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temporizador',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './temporizador.component.html',
  styleUrl: './temporizador.component.css'
})
export class TemporizadorComponent {


  inicio!: any;
  contador = false
  intervalo!: any;

  temporizador() {
    if(!this.contador){
      this.intervalo = setInterval(() => this.descontador(), 1000)
    }
  }

  descontador() {
    this.inicio--;
    if(this.inicio == 0 ){
      this.pausar()
    }
  }

  establecerInicio(num: number) {
    this.inicio = num;
    this.contador = !this.contador;
  }

  pausar() {
    clearInterval(this.intervalo)  
  }

}
