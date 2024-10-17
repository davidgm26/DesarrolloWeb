import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lector',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lector.component.html',
  styleUrl: './lector.component.css'
})
export class LectorComponent {


  @Input() username: any;

}
