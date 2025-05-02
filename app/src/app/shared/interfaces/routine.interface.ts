export interface Exercise {
  id: number;
  name: string;
  description: string;
  muscle_group: string;
}

export interface RoutineExercise {
  id: number;
  id_routine: number;
  id_exercise: number;
  TB_exercises: Exercise;
}

export interface Routine {
  id: number;
  name: string;
  description: string;
  estimatedDuration: number;
  capacity: number;
  TB_routine_exercise: RoutineExercise[];
}
