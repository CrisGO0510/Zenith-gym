import { Component, Inject, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Employee,
  FullEmployee,
} from '../../../../shared/interfaces/employee.interface';
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

  private buildForm(item: Partial<FullEmployee> = {}): FormGroup {
    return this.formBuilder.group({
      id_user: [item.id_user, Validators.required],
      name: [item.name, Validators.required],
      lastname: [item.lastname, Validators.required],
      phone_number: [item.phone_number, Validators.required],
      specialization: [item.specialization, Validators.required],
      birthday: [item.birthday, Validators.required],
      email: [item.email, Validators.required],
      employeeType: item.employeeType,
      employeeTypeId: [item.employeeTypeId, Validators.required],
      date_entry: [item.date_entry || new Date(), Validators.required],
      bio: [item.bio || ''],
    });
  }

  searchUser() {
    const id_user = this.employeeForm.get('id_user')?.value;

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
    if (this.employeeForm.invalid) {
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

    const employeeData: Employee = {
      bio: this.employeeForm.get('bio')?.value,
      specialization: this.employeeForm.get('specialization')?.value,
      date_entry: this.employeeForm.get('date_entry')?.value,
      TB_user_role: {
        id_user: parseInt(this.employeeForm.get('id_user')?.value),
        id_role: this.employeeForm.get('employeeTypeId')?.value,
      },
    };

    this.dialogRef.close(employeeData);
  }

  getRolesTypes() {
    this.subscription$.add(
      this.roleService.getEmployeeRoles().subscribe({
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
