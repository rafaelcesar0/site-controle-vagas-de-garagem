import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Apartamento } from '../interface/apartamento.interface';
import { ApartamnetoPayload } from '../interface/apartamento-payload.interface';

@Injectable({
  providedIn: 'root',
})
export class ApartamentosService {
   http = inject(HttpClient);

  getAll() {
    return this.http.get<Apartamento[]>('/api/apartamento');
  }

  post(payload: ApartamnetoPayload){
    return this.http.post('/api/apartamento', payload);
  }

  delete(id:number) {
    return this.http.delete(`/api/apartamento/${id}`);
  }
}
