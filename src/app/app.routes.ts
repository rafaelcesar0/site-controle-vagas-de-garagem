import { Routes } from '@angular/router';
import { ApartamentTableComponent } from './shared/components/apartament-table/apartament-table.component';
import { VehicleTableComponent } from './shared/components/vehicle-table/vehicle-table.component';


export const routes: Routes = [
  {
    path: '',
    component: ApartamentTableComponent,
  },
  {
    path: 'veiculo',
    component: VehicleTableComponent,
  },
];
