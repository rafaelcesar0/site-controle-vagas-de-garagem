import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApartamentosService } from '../../services/apartamentos.service';
import { ApartamentTableComponent } from '../apartment-table/apartment-table.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-apartment-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './apartment-form.component.html',
})
export class ApartamentFormComponent {
  router = inject(Router);
  aptos = new ApartamentTableComponent().aptos;

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
    }),
  });

  onSubmit() {
    if (this.form.invalid) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const formValue = this.form.getRawValue();

    this.apartmentServece
      .post({
        bloco: Number(String(formValue.bloco)),
        apartamento: Number(String(formValue.apartamento)),
        morador: formValue.morador,
        telefone: formValue.telefone,
        email: formValue.email,
      })
      .subscribe(() => {
        this.apartmentServece.getAll().subscribe(async (aptos) => {
          this.aptos = aptos;
          await this.showAlert('Sucesso!');
          this.router.navigateByUrl('/');
        });
      });
  }

  showAlert(message: string): Promise<void> {
    return new Promise<void>((resolve) => {
      alert(message);
      resolve();
    });
  }
}
