import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MembershipClient } from '../../../../shared/interfaces/membership.interface';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServices } from '../../../../shared/services/users.service';
import { TypeMembership } from '../../../../shared/interfaces/membership-type.interface';
import { MembershipsService } from '../../../memberships/memberships.service';
import { calculateEndDate } from '../../../../shared/helpers';

@Component({
  selector: 'app-activate-client',
  standalone: false,
  templateUrl: './activate-client.component.html',
  styleUrl: './activate-client.component.scss',
})
export class ActivateClientComponent implements OnInit, OnDestroy {
  membershipForm!: FormGroup;
  private subscription$: Subscription = new Subscription();
  membershipOptions: TypeMembership[] = [];

  private formBuilder = inject(FormBuilder);
  private userServices = inject(UserServices);
  private snackBar = inject(MatSnackBar);
  private membershipsService = inject(MembershipsService);

  constructor(public dialogRef: MatDialogRef<ActivateClientComponent>) {}

  ngOnInit(): void {
    this.membershipForm = this.buildForm();
    this.getMembershipTypes();

    this.subscription$.add(
      this.membershipForm
        .get('id_membership')
        ?.valueChanges.subscribe((typeId) => {
          this.onMembershipTypeSelected(typeId);
        })
    );
  }

  protected buildForm(): FormGroup {
    return this.formBuilder.group({
      id_user: null,
      name: '',
      lastName: '',
      id_membership: 0,
      membershipTypeName: '',
      membershipDescription: '',
      membershipPrice: '',
      membershipFrecuency: '',
      start_date: new Date(),
      end_date: '',
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (this.membershipForm.valid) {
      const { id_user, ...savedData } = this.membershipForm.getRawValue();

      this.dialogRef.close({ id_user: parseInt(id_user), ...savedData });
    } else {
      this.snackBar.open(
        'El formulario es inválido. Por favor, revise los campos.',
        'Cerrar',
        {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['error-snackbar'],
        }
      );
      this.markFormGroupTouched(this.membershipForm);
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

  private onMembershipTypeSelected(typeId: number): void {
    const selected = this.membershipOptions.find((m) => m.id === typeId);
    if (!selected) return;

    const startDate = this.membershipForm.get('start_date')?.value || new Date();
    const endDate = calculateEndDate(
      new Date(startDate),
      selected.paymentFrequency
    );

    this.membershipForm.patchValue({
      membershipTypeName: selected.name,
      membershipDescription: selected.description,
      membershipPrice: selected.price,
      membershipFrecuency: selected.paymentFrequency,
      end_date: endDate,
    });
  }

  searchUser() {
    const id_user = this.membershipForm.get('id_user')?.value;

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

            this.membershipForm.patchValue({
              name: user[0].name,
              lastName: user[0].lastname,
            });
          },
          error: (err) => {
            console.error('Error fetching user:', err);
          },
        })
      );
    }
  }

  getMembershipTypes() {
    this.subscription$.add(
      this.membershipsService.getMemberships().subscribe({
        next: (membershipTypes) => {
          this.membershipOptions = membershipTypes;
        },
        error: (err) => {
          console.error('Error fetching membership types:', err);
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
