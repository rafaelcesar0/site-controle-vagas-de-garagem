import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApartamentosService } from '../../services/apartamentos.service';

@Component({
  selector: 'app-apartment-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './apartment-form.component.html',
})
export class ApartamentFormComponent {
  router = inject(Router);

  btnBackApartament() {
    this.router.navigate(['/']);
  }

  apartmentServece = inject(ApartamentosService);

  form = new FormGroup({
    bloco: new FormControl<number | null>(null, {
      nonNullable: true,
      validators: Validators.required,
    }),
    apartamento: new FormControl<number | null>(null, {
      nonNullable: true,
      validators: Validators.required,
    }),
    morador: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    telefone: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  onSubmit() {
    this.apartmentServece
      .post({
        bloco: parseInt(String(this.form.controls.bloco.value)),
        apartamento: parseInt(String(this.form.controls.apartamento.value)),
        morador: this.form.controls.morador.value,
        telefone: this.form.controls.telefone.value,
        email: this.form.controls.email.value,
      })
      .subscribe(() => {
        alert('Sucesso!');
      });
    this.router.navigateByUrl('/');
  }
}
