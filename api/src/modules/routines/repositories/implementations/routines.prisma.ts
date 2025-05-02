import { PrismaService } from 'src/core/prisma/prisma.service';
import { RoutinesRepository } from '../routines.repository';
import { Prisma, TB_routines } from 'generated/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RoutinesPrisma implements RoutinesRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async get(
    where: Prisma.TB_routinesWhereInput,
  ): Promise<TB_routines[]> {
    return this.prisma.tB_routines.findMany({
      where,
      include: {
        TB_routine_exercise: {
          include: {
            TB_exercises: true,
          },
        },
      },
    });
  }
  

  public async create(
    data: Prisma.TB_routinesUncheckedCreateInput,
  ): Promise<TB_routines> {
    return this.prisma.tB_routines.create({
      data,
    });
  }

  public async update(
    where: Prisma.TB_routinesWhereUniqueInput,
    data: Prisma.TB_routine_exerciseUncheckedUpdateInput,
  ): Promise<TB_routines> {
    return this.prisma.tB_routines.update({
      where,
      data,
    });
  }

  public async delete(
    where: Prisma.TB_routinesWhereUniqueInput,
  ): Promise<TB_routines> {
    return this.prisma.tB_routines.delete({
      where,
    });
  }
}
