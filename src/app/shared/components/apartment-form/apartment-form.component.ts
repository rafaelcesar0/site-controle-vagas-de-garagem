import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apartment-form',
  standalone: true,
  imports: [],
  templateUrl: './apartment-form.component.html',
})
export class ApartamentFormComponent {
  router = inject(Router);
  form = new FormGroup({
    bloco: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  btnBackApartament() {
    this.router.navigate(['/']);
  }
}
