import {
  Component,
  Inject,
  OnInit,
  ChangeDetectionStrategy,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import {
  Exercise,
  Routine,
} from '../../../../core/interfaces/routine.interface';
import { RoutineService } from './dialog-training-reservation.services';

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
  routines: WritableSignal<Routine[]> = signal([]);
  selectedRoutine: WritableSignal<Routine | null> = signal(null);
  isLoading: WritableSignal<boolean> = signal(true);
  error: WritableSignal<string | null> = signal(null);
  selectedDate: Date;

  constructor(
    public dialogRef: MatDialogRef<DialogTrainingReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SelectRoutineDialogData,
    private routineService: RoutineService,
  ) {
    this.selectedDate = data.selectedDate;
  }

  ngOnInit(): void {
    this.loadRoutines();
  }

  loadRoutines(): void {
    this.isLoading.set(true);
    this.error.set(null);
    this.selectedRoutine.set(null);

    this.routineService
      .getAvailableRoutines()
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe({
        next: (fetchedRoutines) => {
          this.routines.set(fetchedRoutines);
        },
        error: (err) => {
          console.error('Error fetching routines:', err);
          this.error.set(
            'No se pudieron cargar las rutinas. Intente de nuevo.',
          );
        },
      });
  }

  selectRoutine(routine: Routine): void {
    this.selectedRoutine.set(routine);
  }

  confirmSelection(): void {
    const routineToConfirm = this.selectedRoutine();
    if (routineToConfirm) {
      this.dialogRef.close({
        selectedRoutineId: routineToConfirm.id,
        selectedDate: this.selectedDate,
      });
    }
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
