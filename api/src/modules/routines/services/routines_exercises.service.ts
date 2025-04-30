import { Injectable } from '@nestjs/common';
import { RoutinesExercisesRepository } from '../repositories/routines_exercises.repository';

@Injectable()
export class RoutinesExercisesService {
  constructor(private readonly exercises: RoutinesExercisesRepository) {}

  public get(where: any) {
    return this.exercises.get(where);
  }

  public create(data: any) {
    return this.exercises.create(data);
  }

  public update(where: { id: number }, data: any) {
    return this.exercises.update(where, data);
  }

  public delete(where: { id: number }) {
    return this.exercises.delete(where);
  }
}
