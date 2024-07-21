import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  router = inject(Router);

  btnTableApartament() {
    this.router.navigate(['/']);
  }
  btnTableVehicle() {
    this.router.navigate(['/vehicle']);
  }
}
