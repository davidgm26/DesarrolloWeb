import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  num1!: number;
  num2!: number;
  resultado!: number;

  suma() {
    this.resultado =   this.num1 + this.num2;
  }

  resta(){
    this.resultado  = this.num1 - this.num2;
  }

  multiplicacion(){
    this.resultado = this.num1 * this.num2;
  }

  division(){
    this.resultado = this.num1 / this.num2;
  }
}
