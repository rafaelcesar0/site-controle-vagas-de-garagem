import { Component, inject } from '@angular/core';
import { ApartamentosService } from '../../services/apartamentos.service';
import { Apartamento } from '../../interface/apartamento.interface';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './vehicle-table.component.html',
})
export class VehicleTableComponent {
  router = inject(Router);
  aptos: Apartamento[] = [];

  apartamentosService = inject(ApartamentosService);

  ngOnInit() {
    this.apartamentosService.getAll().subscribe((aptos) => {
      this.aptos = aptos;
    });
  }

  btnCreateVehicle() {
    this.router.navigate(['/vehicle-create']);
  }
}
