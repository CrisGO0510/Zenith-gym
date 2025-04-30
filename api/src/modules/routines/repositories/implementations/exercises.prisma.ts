import { PrismaService } from 'src/core/prisma/prisma.service';
import { ExercisesRepository } from '../exercises.repository';
import { Prisma, TB_exercises } from 'generated/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExercisesPrisma implements ExercisesRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async get(
    where: Prisma.TB_exercisesWhereInput,
  ): Promise<TB_exercises[]> {
    return this.prisma.tB_exercises.findMany({
      where,
      include: {
        TB_routine_exercise: true,
      },
    });
  }

  public async create(
    data: Prisma.TB_exercisesUncheckedCreateInput,
  ): Promise<TB_exercises> {
    return this.prisma.tB_exercises.create({
      data,
    });
  }

  public async update(
    where: Prisma.TB_exercisesWhereUniqueInput,
    data: Prisma.TB_exercisesUncheckedUpdateInput,
  ): Promise<TB_exercises> {
    return this.prisma.tB_exercises.update({
      where,
      data,
    });
  }

  public async delete(
    where: Prisma.TB_exercisesWhereUniqueInput,
  ): Promise<TB_exercises> {
    return this.prisma.tB_exercises.delete({
      where,
    });
  }
}
