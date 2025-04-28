export interface Routine {
  id: number;
  name: string;
  description: string;
  exercises: Exercise[];
}

export interface Exercise {
  id: number;
  name: string;
  description: string;
  muscleGroup: string;
}
