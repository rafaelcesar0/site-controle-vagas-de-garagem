import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Apartamento } from '../interface/apartamento.interface';

@Injectable({
  providedIn: 'root',
})
export class ApartamentosService {
   http = inject(HttpClient);

  getAll() {
    return this.http.get<Apartamento[]>('/api/apartamento');
  }
}
