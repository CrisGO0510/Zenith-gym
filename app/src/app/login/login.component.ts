import {
  Component,
  inject,
  OnDestroy,
  signal,
  WritableSignal,
} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { LoginBody } from '../core/interfaces/login-body';
import { StorageService } from '../core/services/storage/storage.service';
import { StorageKey } from '../core/services/storage/storage.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogSelectRoleComponent } from '../core/components/dialog-select-role/dialog-select-role.component';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnDestroy {
  private subscription$: Subscription = new Subscription();
  hidePassword: WritableSignal<boolean> = signal(true);
  loginForm: FormGroup;

  private router = inject(Router);
  private loginService = inject(LoginService);
  private storageService = inject(StorageService);
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  navigateTo(path: string) {
    console.log('Navigating to:', path);
    this.router.navigate([path]);
  }

  submitForm() {
    if (this.loginForm.valid) {
      const loginBody: LoginBody = {
        id_user: parseInt(this.loginForm.value.username),
        password: this.loginForm.value.password,
      };

      this.handleLogin(loginBody);
    } else {
      this.markFormGroupTouched(this.loginForm);
    }
  }

  handleLogin(loginBody: LoginBody) {
    this.subscription$.add(
      this.loginService.login(loginBody).subscribe({
        next: (response) => {
          this.storageService.save(StorageKey.USER_SESSION, response);

          const dialogRef = this.dialog.open(DialogSelectRoleComponent, {
            width: '80%',
            data: {
              data: response,
            },
          });

          dialogRef
            .afterClosed()
            .subscribe((result) => this.handleDialogClose(result));
        },
        error: (error) => {
          console.error('Login error:', error);
          this.snackBar.open('Usuario o contraseña incorrectas', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
          });
        },
      })
    );
  }

  handleDialogClose(result: any) {
    console.log('Dialog closed with result:', result);
    if (result) {
      this.navigateTo(result);
    } else {
      this.navigateTo('/login');
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

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
