import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../../../../core/interfaces/employee.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SendDataDialog } from '../../../../core/interfaces/send-data-dialog';

@Component({
  selector: 'app-dialog-employee',
  standalone: false,
  templateUrl: './dialog-employee.component.html',
  styleUrl: './dialog-employee.component.scss',
})
export class DialogEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;

  private formBuilder = inject(FormBuilder);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: SendDataDialog<Partial<Employee>>,
    private dialogRef: MatDialogRef<DialogEmployeeComponent>,
  ) {}

  ngOnInit(): void {
    this.employeeForm = this.buildForm(this.data.data);
  }

  private buildForm(item: Partial<Employee> = {}): FormGroup {
    return this.formBuilder.group({
      userId: item.userId,
      name: [item.name || ''],
      lastname: [item.lastname || ''],
      phone: [item.phone || ''],
      especialty: [item.specialty || ''],
      birthdate: [item.birthdate || new Date()],
      email: [item.email || ''],
      employeeType: [item.employeeType || ''],
      employeeTypeId: [item.employeeTypeId || 0],
      date_entry: [item.date_entry || new Date()],
      biography: [item.biography || ''],
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.employeeForm.value);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
