import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from '../counter/counter.component';
import { LectorComponent } from '../lector/lector.component';
import { TaskListComponent } from "../task-list/task-list.component";
import { TemporizadorComponent } from '../temporizador/temporizador.component';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [LectorComponent, FormsModule, CounterComponent, CounterComponent, TaskListComponent,TemporizadorComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  username!: string;

}
