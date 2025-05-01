import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TextFieldModule } from '@angular/cdk/text-field';
import { Subscription } from 'rxjs';
import { UserServices } from '../../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-form-client',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TextFieldModule,
  ],
  templateUrl: './dialog-form-client.component.html',
  styleUrl: './dialog-form-client.component.scss',
})
export class DialogFormClientComponent implements OnInit, OnDestroy {
  private subscription$: Subscription = new Subscription();
  userForm!: FormGroup;

  private fb = inject(FormBuilder);
  private userServices = inject(UserServices);
  private snackBar = inject(MatSnackBar);

  constructor(public dialogRef: MatDialogRef<DialogFormClientComponent>) {}

  ngOnInit(): void {
    this.userForm = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      id_user: null,
      name: null,
      lastname: null,
      email: null,
      phone_number: null,
      birthday: null,
      restriction: null,
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.markFormGroupTouched(this.userForm);
      this.snackBar.open(
        'Por favor, completa todos los campos requeridos.',
        'Cerrar',
        {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['error-snackbar'],
        }
      );
      return;
    }
    
    this.dialogRef.close(this.userForm.value);
  }
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  searchUser() {
    const id_user = this.userForm.get('id_user')?.value;

    if (id_user) {
      this.subscription$.add(
        this.userServices.getUserById(id_user).subscribe({
          next: (user) => {
            if (user.length === 0) {
              this.snackBar.open(
                'No se encontró el usuario con el ID proporcionado.',
                'Cerrar',
                {
                  duration: 3000,
                  verticalPosition: 'top',
                  panelClass: ['error-snackbar'],
                }
              );
              return;
            }

            this.userForm.patchValue({
              name: user[0].name,
              lastname: user[0].lastname,
              phone_number: user[0].phone_number,
              email: user[0].email,
              birthday: user[0].birthday,
              restriction: user[0].restriction,
            });
          },
          error: (err) => {
            console.error('Error fetching user:', err);
          },
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
