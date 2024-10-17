import { Component } from '@angular/core';
import { LectorComponent } from '../lector/lector.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [LectorComponent,FormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  username: string  = 'A'

  

}
