import { Injectable, NotFoundException } from '@nestjs/common';
import { ExercisesRepository } from '../repositories/exercises.repository';

@Injectable()
export class ExercisesService {
  constructor(private readonly exercises: ExercisesRepository) {}

  public get(where: any) {
    return this.exercises.get(where);
  }

  public async getById(id: number) {
    const exercise = await this.exercises.get({ id });

    if (!exercise || exercise.length === 0) {
      throw new NotFoundException(`Exercise with ID ${id} not found`);
    }

    return exercise[0];
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
