import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { SendDataDialog } from '../../../core/interfaces/send-data-dialog';
import { ReservationStatus } from '../../interfaces/reservation-status.enum';
import { Reservation } from '../../interfaces/reservation.interface';

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
      id: item.id ?? null,
      id_client_membership: item.id_client_membership ?? null,
      id_routine: item.id_routine ?? null,
      start_time: item.start_time ?? '',
      end_time: item.end_time ?? '',
      status: item.status ?? 'pendiente',
  
      // Campos opcionales para visualización (no enviados al backend directamente)
      routineName: item.TB_routines?.name ?? '',
      routineDescription: item.TB_routines?.description ?? '',
      clientName: item.TB_client_membership?.TB_user_role?.TB_users?.name ?? '',
      clientLastName: item.TB_client_membership?.TB_user_role?.TB_users?.lastname ?? '',
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
