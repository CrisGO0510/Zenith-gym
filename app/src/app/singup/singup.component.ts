import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { Subscription } from 'rxjs';

interface SignupForm {
  firstName: string;
  lastName: string;
  birthDate: Date;
  document: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-singup',
  standalone: false,
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.scss',
})
export class SingupComponent implements OnInit {
  hidePassword: WritableSignal<boolean> = signal(true);
  hideConfirmPassword: WritableSignal<boolean> = signal(true);
  signupForm: FormGroup;
  passwordMismatch: boolean = true;

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.signupForm = this.fb.group({
      firstName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)],
      ],
      lastName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)],
      ],
      birthDate: ['', [Validators.required]],
      document: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^\+?[0-9]{8,15}$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^[a-zA-Z0-9]*$/),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  passwordMismatchValidator(): void {
    const password = this.signupForm.get('password');
    const confirmPassword = this.signupForm.get('confirmPassword');

    if (password?.value !== confirmPassword?.value) {
      this.passwordMismatch = true;
      this.signupForm
        .get('confirmPassword')
        ?.setErrors({ passwordMismatch: true });
    } else {
      this.passwordMismatch = false;
      this.signupForm.get('confirmPassword')?.setErrors(null);
    }
  }

  submitForm(): void {
    this.passwordMismatchValidator();
    if (this.signupForm.valid) {
      const { confirmPassword, ...formData } = this.signupForm.value;
      const signupData: SignupForm = formData;
      console.log('Form submitted:', signupData);
    } else {
      this.markFormGroupTouched(this.signupForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
