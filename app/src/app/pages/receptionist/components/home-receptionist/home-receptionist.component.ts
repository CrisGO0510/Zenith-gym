import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarView } from 'angular-calendar';
import { DialogFormClientComponent } from '../../../../core/components/dialog-form-client/dialog-form-client.component';
import { ActivateClientComponent } from '../activate-client/activate-client.component';
import { DialogViewReservationComponent } from '../../../../core/components/dialog-view-reservation/dialog-view-reservation.component';

@Component({
  selector: 'app-home-receptionist',
  standalone: false,
  templateUrl: './home-receptionist.component.html',
  styleUrl: './home-receptionist.component.scss',
})
export class HomeReceptionistComponent {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  locale: string = 'es';
  weekStartsOn: number = 1;

  constructor(private dialog: MatDialog) {}

  openAttendance() {
    const dialogRef = this.dialog.open(DialogViewReservationComponent, {
      width: '80%',
      data: {},
    });
  }

  openUser() {
    const dialogRef = this.dialog.open(DialogFormClientComponent, {
      width: '80%',
    });
  }

  activateUser() {
    const dialogRef = this.dialog.open(ActivateClientComponent, {
      width: '80%',
    });
  }
}
