import { PrismaService } from 'src/core/prisma/prisma.service';
import { RoutinesExercisesRepository } from '../routines_exercises.repository';
import { Prisma, TB_routine_exercise } from 'generated/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RoutinesExercisesPrisma implements RoutinesExercisesRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async get(
    where: Prisma.TB_routine_exerciseWhereInput,
  ): Promise<TB_routine_exercise[]> {
    return this.prisma.tB_routine_exercise.findMany({
      where,
      include: {
        TB_exercises: true,
        TB_routines: true,
      },
    });
  }

  public async create(
    data: Prisma.TB_routine_exerciseUncheckedCreateInput,
  ): Promise<TB_routine_exercise> {
    return this.prisma.tB_routine_exercise.create({
      data,
    });
  }

  public async update(
    where: Prisma.TB_routine_exerciseWhereUniqueInput,
    data: Prisma.TB_routine_exerciseUncheckedUpdateInput,
  ): Promise<TB_routine_exercise> {
    return this.prisma.tB_routine_exercise.update({
      where,
      data,
    });
  }

  public async delete(
    where: Prisma.TB_routine_exerciseWhereUniqueInput,
  ): Promise<TB_routine_exercise> {
    return this.prisma.tB_routine_exercise.delete({
      where,
    });
  }
}
