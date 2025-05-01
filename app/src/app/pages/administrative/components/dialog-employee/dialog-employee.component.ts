import { Component, Inject, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../../../../shared/interfaces/employee.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SendDataDialog } from '../../../../core/interfaces/send-data-dialog';
import { Subscription } from 'rxjs';
import { UserServices } from '../../../../shared/services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Role } from '../../../../core/services/role/role.interfaces';
import { RoleService } from '../../../../core/services/role/role.service';

@Component({
  selector: 'app-dialog-employee',
  standalone: false,
  templateUrl: './dialog-employee.component.html',
  styleUrl: './dialog-employee.component.scss',
})
export class DialogEmployeeComponent implements OnInit, OnDestroy {
  employeeForm!: FormGroup;
  private subscription$: Subscription = new Subscription();
  rolesOptions: Role[] = [];

  private formBuilder = inject(FormBuilder);
  private userServices = inject(UserServices);
  private snackBar = inject(MatSnackBar);
  private roleService = inject(RoleService);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: SendDataDialog<Partial<Employee>>,
    private dialogRef: MatDialogRef<DialogEmployeeComponent>
  ) {}

  ngOnInit(): void {
    this.getRolesTypes();
    this.employeeForm = this.buildForm(this.data.data);
  }

  private buildForm(item: Partial<Employee> = {}): FormGroup {
    return this.formBuilder.group({
      userId: item.userId,
      name: [item.name || ''],
      lastname: [item.lastname || ''],
      phone_number: [item.phone_number || ''],
      especialty: [item.specialty || ''],
      birthday: [item.birthday],
      email: [item.email || ''],
      employeeType: [item.employeeType || ''],
      employeeTypeId: [item.employeeTypeId || 0],
      date_entry: [item.date_entry || new Date()],
      biography: [item.biography || ''],
    });
  }

  searchUser() {
    const userId = this.employeeForm.get('userId')?.value;

    if (userId) {
      this.subscription$.add(
        this.userServices.getUserById(userId).subscribe({
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

            this.employeeForm.patchValue({
              name: user[0].name,
              lastname: user[0].lastname,
              phone_number: user[0].phone_number,
              email: user[0].email,
              birthday: user[0].birthday,
            });
          },
          error: (err) => {
            console.error('Error fetching user:', err);
          },
        })
      );
    }
  }

  onSubmit() {
    console.log('Form submitted:', this.employeeForm.value);
  }

  getRolesTypes() {
    this.subscription$.add(
      this.roleService.getRoles().subscribe({
        next: (roles) => {
          this.rolesOptions = roles;
        },
        error: (error) => {
          console.error('Error fetching roles:', error);
          this.snackBar.open(
            'Error al cargar los tipos de empleado.',
            'Cerrar',
            {
              duration: 3000,
              verticalPosition: 'top',
              panelClass: ['error-snackbar'],
            }
          );
        },
      })
    );
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
