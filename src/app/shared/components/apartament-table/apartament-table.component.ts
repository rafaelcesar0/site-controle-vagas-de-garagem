import { Component, inject } from '@angular/core';
import { Apartamento } from '../../interface/apartamento.interface';
import { ApartamentosService } from '../../services/apartamentos.service';

@Component({
  selector: 'app-apartament-table',
  standalone: true,
  imports: [],
  templateUrl: './apartament-table.component.html',
  styleUrl: './apartament-table.component.scss'
})
export class ApartamentTableComponent {

  aptos: Apartamento[] = [];

  apartamentosService = inject(ApartamentosService);

  ngOnInit() {
    this.apartamentosService.getAll().subscribe((aptos) => {
      this.aptos = aptos;
    });
  }
}
