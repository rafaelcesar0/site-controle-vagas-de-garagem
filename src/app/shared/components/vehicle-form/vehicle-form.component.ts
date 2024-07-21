import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  imports: [],
  templateUrl: './vehicle-form.component.html',
})
export class VehicleFormComponent {
  router = inject(Router);
  form = new FormGroup({
    bloco: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  btnBackVehicle() {
    this.router.navigate(['/vehicle']);
  }
}
