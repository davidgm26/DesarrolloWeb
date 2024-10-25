import { Component } from '@angular/core';
import { LectorComponent } from '../lector/lector.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [LectorComponent,FormsModule],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {

  username!: string;


}
