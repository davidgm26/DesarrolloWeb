import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  listaDeTareas: String [] = ['Cocinar','Terminar actividades','Hacer ejercicios']

  tarea!: String

  agregarTarea(tarea:String){
    console.log(this.listaDeTareas);
    this.listaDeTareas.push(tarea)
  }

  eliminarTarea(){
    this.listaDeTareas.pop()
  }


}
