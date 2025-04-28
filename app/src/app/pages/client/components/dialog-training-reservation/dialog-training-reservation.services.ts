import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs'; // Importar 'of' y 'delay' para simulación
import {
  Exercise,
  Routine,
} from '../../../../core/interfaces/routine.interface';

@Injectable({
  providedIn: 'root', // Servicio disponible globalmente
})
export class RoutineService {
  constructor() {}

  // Simula la obtención de rutinas disponibles
  getAvailableRoutines(): Observable<Routine[]> {
    // Datos de ejemplo
    const mockExercises: Exercise[] = [
      {
        id: 101,
        name: 'Press de Banca',
        description: 'Acostado en banca, bajar y subir barra al pecho.',
        muscleGroup: 'Pectoral',
      },
      {
        id: 102,
        name: 'Sentadilla',
        description: 'Bajar cadera flexionando rodillas con barra en hombros.',
        muscleGroup: 'Pierna',
      },
      {
        id: 103,
        name: 'Remo con Barra',
        description: 'Inclinar torso, tirar barra hacia el abdomen.',
        muscleGroup: 'Espalda',
      },
      {
        id: 104,
        name: 'Curl de Bíceps',
        description: 'Flexionar codo subiendo mancuerna.',
        muscleGroup: 'Bíceps',
      },
      {
        id: 105,
        name: 'Elevaciones Laterales',
        description: 'Elevar brazos lateralmente con mancuernas.',
        muscleGroup: 'Hombro',
      },
    ];

    const mockRoutines: Routine[] = [
      {
        id: 1,
        name: 'Pecho y Tríceps',
        description: 'Rutina enfocada en empujes.',
        exercises: [mockExercises[0] /* otros... */],
      },
      {
        id: 2,
        name: 'Espalda y Bíceps',
        description: 'Rutina enfocada en tracciones.',
        exercises: [mockExercises[2], mockExercises[3]],
      },
      {
        id: 3,
        name: 'Pierna Completa',
        description: 'Entrenamiento intensivo de pierna.',
        exercises: [mockExercises[1] /* otros... */],
      },
      {
        id: 4,
        name: 'Hombro y Trapecio',
        description: 'Desarrollo de deltoides.',
        exercises: [mockExercises[4]],
      },
      {
        id: 5,
        name: 'Full Body Básico',
        description: 'Ejercicios compuestos principales.',
        exercises: [mockExercises[0], mockExercises[1], mockExercises[2]],
      },
    ];

    // Simula un retraso de red y devuelve los datos con 'of'
    return of(mockRoutines).pipe(delay(800)); // Simula 800ms de carga
  }
}
