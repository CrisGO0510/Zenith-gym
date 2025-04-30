import { Component, Inject, OnInit } from '@angular/core';
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
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SendDataDialog } from '../../interfaces/send-data-dialog';
import { MatSelectModule } from '@angular/material/select';
import { ReservationStatus } from '../../interfaces/reservation-status.enum';

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
    ReactiveFormsModule,
    MatSelectModule,
  ],
  templateUrl: './dialog-view-reservation.component.html',
  styleUrls: ['./dialog-view-reservation.component.scss'],
})
export class DialogViewReservationComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});
  reservationStatusOptions: { value: ReservationStatus; label: string }[] = [];

  constructor(
    public dialogRef: MatDialogRef<DialogViewReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SendDataDialog<Partial<Reservation>>,
    private formBuilder: FormBuilder,
  ) {}

  protected buildForm(item: Partial<Reservation> = {}): FormGroup {
    return this.formBuilder.group({
      id: item.id,
      clientId: item.clientId,
      clientName: item.clientName,
      clientLastName: item.clientLastName,
      routineId: item.routineId,
      routineName: item.routineName,
      instructorId: item.instructorId,
      instructorName: item.instructorName,
      instructorLastName: item.instructorLastName,
      routineDescription: item.routineDescription,
      startDate: item.startDate,
      endDate: item.endDate,
      reservationStatusId: item.reservationStatusId ?? 2,
      reservationStatus: item.reservationStatus,
    });
  }

  ngOnInit(): void {
    this.reservationStatusOptions = Object.values(ReservationStatus)
      .filter((value): value is ReservationStatus => typeof value === 'number')
      .map((status) => ({
        value: status,
        label: ReservationStatus.toLabel(status),
      }));
    this.reservationForm = this.buildForm(this.data.data);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
