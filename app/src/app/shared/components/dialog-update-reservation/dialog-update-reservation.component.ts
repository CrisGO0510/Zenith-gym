import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Subscription } from 'rxjs';
import { Reservation } from '../../interfaces/reservation.interface';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogViewReservationComponent } from '../dialog-view-reservation/dialog-view-reservation.component';
import { Mode } from '../../../core/interfaces/mode.enum';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule, MatSelectionListChange } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-update-reservation',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
  templateUrl: './dialog-update-reservation.component.html',
  styleUrl: './dialog-update-reservation.component.scss',
})
export class DialogUpdateReservationComponent implements OnInit, OnDestroy {
  searchForm!: FormGroup;
  private dialog = inject(MatDialog);
  private subscription$: Subscription = new Subscription();
  reservations: Reservation[] = [];
  selectedReservationId?: number;

  private formBuilder = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private clientService = inject(ClientService);

  constructor(public dialogRef: MatDialogRef<DialogViewReservationComponent>) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      clientId: [null, [Validators.required, Validators.min(1)]],
    });
  }

  searchUser() {
    if (this.searchForm.invalid) return;
    const id = this.searchForm.value.clientId;
    this.subscription$.add(
      this.clientService.getAllReservations(id).subscribe({
        next: (res) => (this.reservations = res),
        error: (err) => console.error('Error fetching reservations', err),
      })
    );
  }

  onSelect(ev: MatSelectionListChange) {
    const sel = ev.options[0].value as Reservation;

    this.viewReservation(sel);
  }

  viewReservation(reservation: Reservation): void {
    if (!reservation) {
      console.error(
        'Intento de abrir diálogo con datos de reserva nulos o indefinidos.'
      );
      return;
    }

    const dialogViewRef = this.dialog.open(DialogViewReservationComponent, {
      width: '80%',
      data: { data: reservation, mode: Mode.update },
    });

    this.subscription$.add(
      dialogViewRef.afterClosed().subscribe((result) => {
        if (result) {
          console.log(result);
          this.dialogRef.close(result);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
