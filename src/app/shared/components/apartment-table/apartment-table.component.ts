import { Component, inject } from '@angular/core';
import { Apartamento } from '../../interface/apartamento.interface';
import { ApartamentosService } from '../../services/apartamentos.service';
import { Router } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-apartment-table',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './apartment-table.component.html',
})
export class ApartamentTableComponent {
  router = inject(Router);
  aptos: Apartamento[] = [];

  apartamentosService = inject(ApartamentosService);

  ngOnInit() {
    this.apartamentosService.getAll().subscribe((aptos) => {
      this.aptos = aptos;
    });
  }

  btnCreateApartament() {
    this.router.navigate(['/apartment-create']);
  }
}
