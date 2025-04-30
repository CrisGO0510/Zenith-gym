import { Injectable } from '@nestjs/common';
import { RoutinesRepository } from '../repositories/routines.repository';

@Injectable()
export class RoutinesService {
  constructor(private readonly exercises: RoutinesRepository) {}

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
