import {
  Component,
  Inject,
  OnInit,
  ChangeDetectionStrategy,
  signal,
  WritableSignal,
  inject,
  computed,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  Routine,
  Exercise,
} from '../../../../shared/interfaces/routine.interface';
import { ClientService } from '../../../../shared/services/client.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface SelectRoutineDialogData {
  selectedDate: Date;
}

export interface SelectRoutineDialogResult {
  selectedRoutineId: number;
  selectedDate: Date;
}

@Component({
  selector: 'app-dialog-training-reservation',
  standalone: false,
  templateUrl: './dialog-training-reservation.component.html',
  styleUrl: './dialog-training-reservation.component.scss',
})

export class DialogTrainingReservationComponent implements OnInit {
  selectedRoutine: WritableSignal<Routine | null> = signal(null);
  routines: Routine[] = [];
  selectedDate: Date;

  private clientService = inject(ClientService);
  private snackbar = inject(MatSnackBar);

  constructor(
    private dialogRef: MatDialogRef<DialogTrainingReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SelectRoutineDialogData
  ) {
    this.selectedDate = data.selectedDate;
  }

  ngOnInit(): void {
    this.loadRoutines();
  }

  private loadRoutines(): void {
    this.clientService.getRoutines().subscribe({
      next: (response) => {
        this.routines = response;
      },
      error: (err) => {
        console.error(err);
        this.snackbar.open(
          'Error al cargar las rutinas. Por favor, inténtelo de nuevo más tarde.',
          'Cerrar',
          {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
          }
        );
      },
    });
  }

  selectRoutine(routine: Routine): void {
    this.selectedRoutine.set(routine);
  }

  confirmSelection(): void {
    const routine = this.selectedRoutine();
    if (!routine) {
      this.snackbar.open(
        'Por favor, seleccione una rutina antes de continuar.',
        'Cerrar',
        {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['error-snackbar'],
        }
      );
      return;
    }

    const result: SelectRoutineDialogResult = {
      selectedRoutineId: routine.id,
      selectedDate: this.selectedDate,
    };

    this.dialogRef.close(result);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  trackRoutineById(index: number, item: Routine): number {
    return item.id;
  }

  trackExerciseById(index: number, item: Exercise): number {
    return item.id;
  }
}
