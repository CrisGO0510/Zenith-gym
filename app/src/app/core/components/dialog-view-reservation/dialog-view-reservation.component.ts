import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Reservation } from '../../interfaces/reservation.interface';
import { CommonModule, DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

interface DialogViewData {
  reservation: Reservation;
}

@Component({
  selector: 'app-dialog-view-reservation',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    DatePipe,
  ],
  templateUrl: './dialog-view-reservation.component.html',
  styleUrls: ['./dialog-view-reservation.component.scss'],
})
export class DialogViewReservationComponent {
  reservationData!: Reservation;

  constructor(
    public dialogRef: MatDialogRef<DialogViewReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogViewData,
  ) {
    console.log('Datos recibidos en diálogo:', this.data.reservation);
    this.reservationData = data.reservation;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
