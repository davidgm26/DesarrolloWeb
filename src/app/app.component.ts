import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './components/landing/landing.component';
import { NavbarComponent } from "./components/navbar/navbar.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingComponent, FormsModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  

}

