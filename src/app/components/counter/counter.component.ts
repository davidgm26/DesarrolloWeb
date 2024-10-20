import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {


  fecha!: Date;
  horaMostrada!: String;
  hora!: String;
  minutos!: String;
  segundos!: String;
  intervaloTiempo!: any;
  encendido!: boolean;

  ngOnInit(): void {
      this.actualizarHora()
      this.establecerIntervalo(1000)
  }

  establecerIntervalo(num:number){
    if(!this.encendido){
      this.encendido = true
      this.intervaloTiempo = setInterval(() => this.actualizarHora(),num);
    }
  }
  
  actualizarHora(){
    this.fecha =  new Date();
    this.hora = this.fecha.getHours().toString().padStart(2,"0")
    this.minutos = this.fecha.getMinutes().toString().padStart(2,"0")
    this.segundos = this.fecha.getSeconds().toString().padStart(2,"0")
    this.horaMostrada=`${this.hora}:${this.minutos}:${this.segundos}`
  }

  pararIntervalo(){
    clearInterval(this.intervaloTiempo)
    this.encendido = false
  }

  ngOnDestroy(): void {
  this.establecerIntervalo(0)
  }



}
