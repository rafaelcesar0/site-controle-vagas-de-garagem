import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  router = inject(Router);
  title = 'site-controle-vagas-de-garagem';

  btnTableApartament() {
    this.router.navigate(['/apartment']);
  }
  btnTableVehicle() {
    this.router.navigate(['/vehicle']);
  }
}
