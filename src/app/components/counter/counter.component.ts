import { Component } from '@angular/core';


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

  ngOnInit(): void {
      this.actualizarHora()
      this.establecerIntervalo(1000)
  }

  establecerIntervalo(num:number){
    this.intervaloTiempo = setInterval(() => this.actualizarHora(),num);
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
  }

  ngOnDestroy(): void {
  this.establecerIntervalo(0)
  }



}
