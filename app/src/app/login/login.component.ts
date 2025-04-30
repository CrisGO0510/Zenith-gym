import { Component, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { LoginBody } from '../core/interfaces/login-body';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  hidePassword: WritableSignal<boolean> = signal(true);
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  navigateTo(path: string) {
    console.log('Navigating to:', path);
    this.router.navigate([path]);
  }

  submitForm() {
    if (this.loginForm.valid) {
      const loginBody: LoginBody = {
        id_user: this.loginForm.value.username,
        password: this.loginForm.value.password,
      };

      console.log('Form submitted', loginBody);
      this.loginService.login(loginBody).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          this.navigateTo('/home');
        },
        error: (error) => {
          console.error('Login failed', error);
        },
      });
    } else {
      this.markFormGroupTouched(this.loginForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
