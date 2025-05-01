import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MembershipClient } from '../../../../shared/interfaces/membership.interface';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-activate-client',
  standalone: false,
  templateUrl: './activate-client.component.html',
  styleUrl: './activate-client.component.scss',
})
export class ActivateClientComponent implements OnInit {
  membershipForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ActivateClientComponent>,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.membershipForm = this.buildForm();
  }

  protected buildForm(): FormGroup {
    return this.formBuilder.group({
      id: null,
      thirdPartyId: null,
      name: '',
      lastName: '',
      membershipTypeId: 0,
      membershipTypeName: '',
      createdAt: new Date(Date.now()),
      endAt: new Date(),
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (this.membershipForm.valid) {
      const savedData: Partial<MembershipClient> = this.membershipForm.getRawValue();
      console.log('Guardando membresía:', savedData);
      this.dialogRef.close({ savedMembership: savedData });
    } else {
      console.log('Formulario inválido');
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

  searchUserByDocument(): void {
    const documentId = this.membershipForm.get('thirdPartyId')?.value;
    console.log(`Simulando búsqueda de usuario con documento: ${documentId}`);
  }
}
