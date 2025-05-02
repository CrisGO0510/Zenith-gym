import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { id } from '@swimlane/ngx-charts';
import { User } from '../../shared/interfaces/user.interface';
import { UserServices } from '../../shared/services/users.service';

interface SignupForm {
  firstName: string;
  lastName: string;
  birthday: Date;
  document: string;
  phone: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-singup',
  standalone: false,
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.scss',
})
export class SignupComponent implements OnInit, OnDestroy {
  hidePassword: WritableSignal<boolean> = signal(true);
  hideConfirmPassword: WritableSignal<boolean> = signal(true);
  signupForm!: FormGroup;
  private subscription$: Subscription = new Subscription();

  private snackBar = inject(MatSnackBar);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private userService = inject(UserServices);

  constructor() {}

  ngOnInit(): void {
    this.signupForm = this.fb.group(
      {
        firstName: [
          '',
          [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)],
        ],
        lastName: [
          '',
          [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)],
        ],
        birthday: ['', [Validators.required]],
        document: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
        phone: [
          '',
          [Validators.required, Validators.pattern(/^\+?[0-9]{8,15}$/)],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.pattern(/^[a-zA-Z0-9]*$/),
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordsMatchValidator }
    );
  }

  private passwordsMatchValidator(
    group: AbstractControl
  ): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  get confirmPasswordError(): boolean {
    return (
      this.signupForm.hasError('passwordMismatch') &&
      !!this.signupForm.get('confirmPassword')?.touched
    );
  }

  submitForm(): void {
    const password = this.signupForm.get('password')?.value;
    const confirmPassword = this.signupForm.get('confirmPassword')?.value;
    const passwordMismatch = password !== confirmPassword;

    if (passwordMismatch) {
      this.snackBar.open('Las contraseñas son distintas', 'Close', {
        duration: 3000,
      });
      return;
    }
    if (this.signupForm.valid) {
      const { confirmPassword, ...signupData } = this.signupForm.value;
      this.createUser(signupData as SignupForm);
    } else {
      this.markFormGroupTouched(this.signupForm);
    }
  }

  createUser(signupData: SignupForm): void {
    const userData: User = {
      id_user: parseInt(signupData.document),
      name: signupData.firstName,
      lastname: signupData.lastName,
      email: signupData.email,
      phone_number: signupData.phone,
      birthday: signupData.birthday,
      password: signupData.password,
    };

    this.subscription$.add(
      this.userService.createUser(userData).subscribe({
        next: (response) => {
          this.snackBar.open(
            'Usuario creado correctamente, un asesor se comunicará con usted pronto',
            'Cerrar',
            {
              duration: 3000,
              verticalPosition: 'top',
            }
          );
          this.navigateTo('/login');
        },
        error: (error) => {
          console.error('Error creating user:', error);
          this.snackBar.open(
            'Error al crear el usuario, por favor intente nuevamente',
            'Cerrar',
            {
              duration: 3000,
              verticalPosition: 'top',
            }
          );
        },
      })
    );
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
