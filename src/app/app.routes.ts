import { Routes } from '@angular/router';
import { ApartamentTableComponent } from './shared/components/apartament-table/apartment-table.component';
import { VehicleTableComponent } from './shared/components/vehicle-table/vehicle-table.component';
import { ApartamentFormComponent } from './shared/components/apartment-form/apartment-form.component';

export const routes: Routes = [
  {
    path: 'apartment',
    component: ApartamentTableComponent,
  },
  {
    path: 'apartment-create',
    component: ApartamentFormComponent,
  },
  {
    path: 'vehicle',
    component: VehicleTableComponent,
  },
];
