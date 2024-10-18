import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './components/landing/landing.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LandingComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  

}

