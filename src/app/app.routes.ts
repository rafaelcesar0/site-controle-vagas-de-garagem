import { Routes } from '@angular/router';
import { ApartamentTableComponent } from './shared/components/apartment-table/apartment-table.component';
import { VehicleTableComponent } from './shared/components/vehicle-table/vehicle-table.component';
import { ApartamentFormComponent } from './shared/components/apartment-form/apartment-form.component';
import { VehicleFormComponent } from './shared/components/vehicle-form/vehicle-form.component';

export const routes: Routes = [
  {
    path: '',
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
  {
    path: 'vehicle-create',
    component: VehicleFormComponent,
  },
];
