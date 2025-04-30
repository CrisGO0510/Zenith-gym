import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TableEmployeeComponent } from '../table-employee/table-employee.component';

@Component({
  selector: 'app-home-administrative',
  standalone: false,
  templateUrl: './home-administrative.component.html',
  styleUrl: './home-administrative.component.scss',
})
export class HomeAdministrativeComponent {
  private suscription$: Subscription = new Subscription();

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(TableEmployeeComponent, {
      width: '80%',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
