import { Component, inject, Inject, OnInit } from '@angular/core';
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
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServices } from '../../services/users.service';

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
  reservationStatusOptions: { value: string; label: ReservationStatus }[] = [];
  private subscription$: Subscription = new Subscription();

  private formBuilder = inject(FormBuilder);
  private userServices = inject(UserServices);
  private snackBar = inject(MatSnackBar);

  constructor(
    public dialogRef: MatDialogRef<DialogViewReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SendDataDialog<Partial<Reservation>>
  ) {}

  protected buildForm(item: Partial<Reservation> = {}): FormGroup {
    return this.formBuilder.group({
      id: item.id ?? null,
      id_client_membership: item.id_client_membership ?? null,
      id_routine: item.id_routine ?? null,
      start_time: [
        { value: item.start_time ?? '', disabled: this.data.mode !== 2 },
      ],
      end_time: [
        { value: item.end_time ?? '', disabled: this.data.mode !== 2 },
      ],
      status: [{ value: item.status, disabled: this.data.mode !== 2 }],

      // Campos opcionales para visualización (no enviados al backend directamente)
      routineName: [{ value: item.TB_routines?.name ?? '', disabled: true }],
      routineDescription: [
        { value: item.TB_routines?.description ?? '', disabled: true },
      ],
      clientId: [
        {
          value:
            item.TB_client_membership?.TB_user_role?.TB_users?.id_user ?? null,
          disabled: true,
        },
      ],
      clientName: [
        {
          value: item.TB_client_membership?.TB_user_role?.TB_users?.name ?? '',
          disabled: true,
        },
      ],
      clientLastName: [
        {
          value:
            item.TB_client_membership?.TB_user_role?.TB_users?.lastname ?? '',
          disabled: true,
        },
      ],
    });
  }

  ngOnInit(): void {
    this.reservationStatusOptions = Object.entries(ReservationStatus).map(
      ([value, label]) => ({
        value,
        label,
      })
    );

    this.reservationForm = this.buildForm(this.data.data);
  }

  onSubmit() {
    if (this.reservationForm.invalid) {
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

    const formData = this.reservationForm.value;
    console.log(formData);
    this.dialogRef.close(formData);
  }

  private normalizeStatus(rawStatus: string | undefined): string {
    if (!rawStatus) return 'PENDING';

    const match = Object.entries(ReservationStatus).find(
      ([key, label]) => label.toLowerCase() === rawStatus.toLowerCase()
    );

    return match ? match[0] : 'PENDING';
  }

  searchUser() {
    // const id_user = this.reservationForm.get('clientId')?.value;
    // if (id_user) {
    //   this.subscription$.add(
    //     this.userServices.getUserById(id_user).subscribe({
    //       next: (user) => {
    //         if (user.length === 0) {
    //           this.snackBar.open(
    //             'No se encontró el usuario con el ID proporcionado.',
    //             'Cerrar',
    //             {
    //               duration: 3000,
    //               verticalPosition: 'top',
    //               panelClass: ['error-snackbar'],
    //             }
    //           );
    //           return;
    //         }
    //         this.reservationForm.patchValue({
    //           clientName: user[0].name,
    //           clientLastName: user[0].lastname,
    //         });
    //       },
    //       error: (err) => {
    //         console.error('Error fetching user:', err);
    //       },
    //     })
    //   );
    // }
  }

  onDestroy() {
    this.subscription$.unsubscribe();
  }
}
