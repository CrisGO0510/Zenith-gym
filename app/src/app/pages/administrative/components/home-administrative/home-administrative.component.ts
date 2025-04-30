import { Component, OnInit, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DialogEmployeeComponent } from '../dialog-employee/dialog-employee.component';
import { Mode } from '../../../../core/interfaces/mode.enum';
import { Employee } from '../../../../core/interfaces/employee.interface';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';

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

  employeeTypes = signal([
    { id: 0, name: 'Todos' },
    { id: 1, name: 'Profesor' },
    { id: 2, name: 'Personal de limpieza' },
    { id: 3, name: 'Recepcionista' },
  ]);

  constructor(private dialog: MatDialog) {
    this.setupFilters();
  }

  ngOnInit(): void {
    this.dataSource.data = [
      {
        userId: 11234123,
        name: 'Martín',
        lastname: 'González',
        email: 'martin.gonzalez@gym.com',
        phone: '1123456789',
        birthdate: new Date('1990-01-01'),
        thirdPartyId: 123456,
        biography: 'Profesor de yoga con 10 años de experiencia.',
        specialty: 'Yoga',
        date_entry: new Date('2020-01-01'),
        employeeType: 'Profesor',
        employeeTypeId: 1,
      },
      {
        userId: 11234124,
        name: 'Ana',
        lastname: 'Pérez',
        email: '',
        phone: '',
        birthdate: new Date('1995-05-15'),
        thirdPartyId: 123457,
        biography: 'Personal de limpieza con 5 años de experiencia.',
        specialty: '',
        date_entry: new Date('2018-01-01'),
        employeeType: 'Personal de limpieza',
        employeeTypeId: 2,
      },
    ];
  }

  private setupFilters(): void {
    this.suscription$.add(
      this.employeeTypeFilter.valueChanges.subscribe((value) => {
        this.applyFilter(value);
      }),
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
      console.log('The dialog was closed');
    });
  }

  deleteEmployee(employeeId: number): void {}

  ngOnDestroy(): void {
    this.suscription$.unsubscribe();
  }
}
