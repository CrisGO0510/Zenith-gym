import { Component, inject, OnInit, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DialogEmployeeComponent } from '../dialog-employee/dialog-employee.component';
import { Mode } from '../../../../core/interfaces/mode.enum';
import { Employee } from '../../../../shared/interfaces/employee.interface';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { StorageService } from '../../../../core/services/storage/storage.service';
import { StorageKey } from '../../../../core/services/storage/storage.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-administrative',
  standalone: false,
  templateUrl: './home-administrative.component.html',
  styleUrl: './home-administrative.component.scss',
})
export class HomeAdministrativeComponent implements OnInit {
  private suscription$: Subscription = new Subscription();

  dataSource = new MatTableDataSource<Employee>();
  displayedColumns: string[] = [
    'userId',
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

  constructor() {}

  ngOnInit(): void {
    this.roleValidate();
    this.setupFilters();
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
    this.dataSource.filterPredicate = (data: Employee, filter: string) => {
      if (!filter || filter === 'null') return true;
      return data.employeeType === filter;
    };

    this.dataSource.filter = employeeType?.toString() || 'null';
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

    dialogRef.afterClosed().subscribe((result) => {
      console.log('resul', result);
    });
  }

  deleteEmployee(employeeId: number): void {}

  ngOnDestroy(): void {
    this.suscription$.unsubscribe();
  }
}
