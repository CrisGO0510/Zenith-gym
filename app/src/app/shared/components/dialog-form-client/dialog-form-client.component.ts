import { Component, OnInit } from '@angular/core';
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
import { User } from '../../interfaces/user.interface';

export interface EditUserDialogData {
  user: User;
}

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
export class DialogFormClientComponent implements OnInit {
  userForm!: FormGroup;
  originalUser?: User = {
    userId: 1,
    name: 'John',
    lastname: 'Doe',
    email: 'john.doe@example.com',
    password: 'hashedPassword123',
    phone_number: '+541156789012',
    birthday: new Date('1990-01-15'),
    restriction: 'None',
  };

  private getEmptyUser(): User {
    return {
      userId: 0,
      name: '',
      lastname: '',
      email: '',
      password: '',
      phone_number: '',
      birthday: new Date(),
      restriction: '',
    };
  }

  constructor(
    public dialogRef: MatDialogRef<DialogFormClientComponent>,
    private fb: FormBuilder,
  ) {}

  private buildForm(user: User): FormGroup {
    return this.fb.group({
      userId: [{ value: user.userId, disabled: true }],
      name: [
        user.name,
        [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)],
      ],
      lastname: [
        user.lastname,
        [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)],
      ],
      phone_number: [
        user.phone_number,
        [Validators.required, Validators.pattern(/^\+?[0-9]{8,15}$/)],
      ],
      email: [user.email, [Validators.required, Validators.email]],
      birthday: [
        user.birthday ? new Date(user.birthday) : null,
        [Validators.required],
      ],
      restriction: [user.restriction || ''],
    });
  }

  ngOnInit(): void {
    this.userForm = this.buildForm(this.originalUser ?? this.getEmptyUser());
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (this.userForm.valid) {
      const updatedUserData: User = {
        ...this.originalUser,
        ...this.userForm.getRawValue(),
      };
      this.dialogRef.close({ updatedUser: updatedUserData });
    } else {
      this.markFormGroupTouched(this.userForm);
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
