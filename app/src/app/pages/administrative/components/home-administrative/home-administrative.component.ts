import { Component, inject, OnInit, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DialogEmployeeComponent } from '../dialog-employee/dialog-employee.component';
import { Mode } from '../../../../core/interfaces/mode.enum';
import {
  Employee,
  FullEmployee,
} from '../../../../shared/interfaces/employee.interface';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { StorageService } from '../../../../core/services/storage/storage.service';
import { StorageKey } from '../../../../core/services/storage/storage.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeesService } from '../../../../shared/services/employees.service';
import { UserServices } from '../../../../shared/services/users.service';

@Component({
  selector: 'app-home-administrative',
  standalone: false,
  templateUrl: './home-administrative.component.html',
  styleUrl: './home-administrative.component.scss',
})
export class HomeAdministrativeComponent implements OnInit {
  private suscription$: Subscription = new Subscription();

  dataSource = new MatTableDataSource<FullEmployee>();
  displayedColumns: string[] = [
    'id_user',
    'name',
    'lastname',
    'employeeType',
    'actions',
  ];

  employeeTypeFilter = new FormControl<number | null>(null);

  private dialog = inject(MatDialog);
  private storageService = inject(StorageService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private employeesService = inject(EmployeesService);
  private userService = inject(UserServices);

  constructor() {}

  ngOnInit(): void {
    this.roleValidate();
    this.getEmployees();
    this.setupFilters();
  }

  private getEmployees(): void {
    this.dataSource.data = [];
    this.suscription$.add(
      this.employeesService.getEmployees().subscribe({
        next: (response) => {
          if (response) {
            response.forEach((employee) => {
              this.getFullEmployee(employee);
            });
          } else {
            this.snackBar.open('Error al obtener los empleados', 'Cerrar', {
              duration: 3000,
              verticalPosition: 'top',
            });
          }
        },
        error: (err) => {
          console.error('Error al obtener los empleados:', err);
          console.log(err.error.message);
          this.snackBar.open(
            `${err.error.message ?? 'Error al obtener los empleados'}`,
            'Cerrar',
            {
              duration: 3000,
              verticalPosition: 'top',
            }
          );
        },
        complete: () => {
          console.log('Obtención de empleados completada');
        },
      })
    );
  }

  private getFullEmployee(employee: Employee): void {
    this.suscription$.add(
      this.userService
        .getUserById(employee.TB_user_role.id_user)
        .subscribe((user) => {
          //TODO: Optmizar esta parte, ya que se hace una consulta por cada empleado
          if (user.length > 0) {
            const fullEmployee: FullEmployee = {
              id_user: user[0].id_user,
              name: user[0].name,
              lastname: user[0].lastname,
              email: user[0].email,
              phone_number: user[0].phone_number,
              birthday: user[0].birthday,
              restriction: user[0].restriction,

              id_user_role: employee.id_user_role,
              bio: employee.bio,
              specialization: employee.specialization,
              date_entry: employee.date_entry,
              // TODO: Crear vista mas adelante
              employeeType:
                employee.TB_user_role.id_role == 1
                  ? 'Administrador'
                  : 'Empleado',
              employeeTypeId: employee.TB_user_role.id_role,
            };

            console.log('Full Employee:', fullEmployee);

            this.dataSource.data = [...this.dataSource.data, fullEmployee];
            console.log(this.dataSource.data);
          } else {
            this.snackBar.open('Error al obtener el empleado', 'Cerrar', {
              duration: 3000,
              verticalPosition: 'top',
            });
          }
        })
    );
  }

  private roleValidate() {
    const user = this.storageService.read(StorageKey.CURRENT_ROLE);

    if (user?.id_role != 2) {
      this.snackBar.open(
        'No tienes permisos para acceder a esta página',
        'Cerrar',
        {
          duration: 3000,
          verticalPosition: 'top',
        }
      );
      this.router.navigate(['/']);
    }
  }

  private setupFilters(): void {
    this.suscription$.add(
      this.employeeTypeFilter.valueChanges.subscribe((value) => {
        this.applyFilter(value);
      })
    );
  }

  private applyFilter(employeeType: number | null): void {
    //   this.dataSource.filterPredicate = (data: Employee, filter: string) => {
    //     if (!filter || filter === 'null') return true;
    //     return data.employeeType === filter;
    //   };
    //   this.dataSource.filter = employeeType?.toString() || 'null';
  }

  openDialog(employee?: Employee): void {
    const dialogConfig = {
      width: '80%',
      data: {
        mode: employee ? Mode.update : Mode.save,
        data: employee || {},
      },
    };

    const dialogRef = this.dialog.open(DialogEmployeeComponent, dialogConfig);

    this.suscription$.add(
      dialogRef.afterClosed().subscribe((result: Employee) => {
        console.log('resul', result);

        if (result) {
          if (result.id_user_role) {
            this.updateEmployee(result);
          } else {
            this.createEmployee(result);
          }
        } else {
          console.log('Dialog closed without changes');
        }
      })
    );
  }

  createEmployee(employee: Employee): void {
    this.suscription$.add(
      this.employeesService.createEmployee(employee).subscribe({
        next: (response) => {
          if (response) {
            this.snackBar.open('Empleado creado con éxito', 'Cerrar', {
              duration: 3000,
              verticalPosition: 'top',
            });

            this.getEmployees();
          } else {
            this.snackBar.open('Error al crear el empleado', 'Cerrar', {
              duration: 3000,
              verticalPosition: 'top',
            });
          }
        },
        error: (err) => {
          console.error('Error al crear el empleado:', err);
          this.snackBar.open(
            `${err.error.message ?? 'Error al crear el empleado'}`,
            'Cerrar',
            {
              duration: 3000,
              verticalPosition: 'top',
            }
          );
        },
        complete: () => {
          console.log('Creación de empleado completada');
        },
      })
    );
  }

  updateEmployee(employee: Employee): void {
    if (!employee.id) {
      this.snackBar.open(
        'ID de empleado no proporcionado para la actualización',
        'Cerrar',
        {
          duration: 3000,
          verticalPosition: 'top',
        }
      );
      return;
    }

    this.suscription$.add(
      this.employeesService.updateEmployee(employee.id, employee).subscribe({
        next: (response) => {
          if (response) {
            this.snackBar.open('Empleado actualizado con éxito', 'Cerrar', {
              duration: 3000,
              verticalPosition: 'top',
            });

            this.getEmployees();
          } else {
            this.snackBar.open('Error al actualizar el empleado', 'Cerrar', {
              duration: 3000,
              verticalPosition: 'top',
            });
          }
        },
        error: (err) => {
          console.error('Error al actualizar el empleado:', err);
          this.snackBar.open(
            `${err.error.message ?? 'Error al actualizar el empleado'}`,
            'Cerrar',
            {
              duration: 3000,
              verticalPosition: 'top',
            }
          );
        },
        complete: () => {
          console.log('Actualización de empleado completada');
        },
      })
    );
  }

  deleteEmployee(employeeId: number): void {}

  ngOnDestroy(): void {
    this.suscription$.unsubscribe();
  }
}
