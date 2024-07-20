import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-apartament-table',
  standalone: true,
  imports: [],
  templateUrl: './apartament-table.component.html',
  styleUrl: './apartament-table.component.scss'
})
export class ApartamentTableComponent {

  aptos: any[] = [];

  http = inject(HttpClient);

  ngOnInit() {
    this.http.get<any>('/api/apartamento').subscribe((aptos) => {
      this.aptos = aptos;
    });
  }
}
