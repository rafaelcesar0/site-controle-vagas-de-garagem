import { Component, inject } from '@angular/core';
import { Apartamento } from '../../interface/apartamento.interface';
import { ApartamentosService } from '../../services/apartamentos.service';
import { Router } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { InputSearchComponent } from "../input-search/input-search.component";
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-apartment-table',
  standalone: true,
  imports: [
    NavBarComponent,
    InputSearchComponent,
    NgxMaskDirective,
    NgxMaskPipe,
    NgFor,
  ],
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

  onDelete(id: number) {
    if (confirm('Esse processo é irreversível, deseja prosseguir?')) {
      this.apartamentosService.delete(id).subscribe(() => {
        this.apartamentosService.getAll().subscribe((aptos) => {
          this.aptos = aptos;
        });
      });
    }
  }
}
