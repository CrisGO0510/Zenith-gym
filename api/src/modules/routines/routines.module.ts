import { Module } from '@nestjs/common';
import { ExercisesController } from './controllers/exercises.controller';
import { RoutinesController } from './controllers/routines.controller';
import { RoutinesExercisesController } from './controllers/routines_exercises.controller';
import { ExercisesService } from './services/exercises.service';
import { ExercisesRepository } from './repositories/exercises.repository';
import { ExercisesPrisma } from './repositories/implementations/exercises.prisma';
import { RoutinesExercisesService } from './services/routines_exercises.service';
import { RoutinesRepository } from './repositories/routines.repository';
import { RoutinesPrisma } from './repositories/implementations/routines.prisma';
import { RoutinesService } from './services/routines.service';
import { RoutinesExercisesRepository } from './repositories/routines_exercises.repository';
import { RoutinesExercisesPrisma } from './repositories/implementations/routines_exercises.prisma';

@Module({
  controllers: [
    ExercisesController,
    RoutinesController,
    RoutinesExercisesController,
  ],
  providers: [
    ExercisesService,
    {
      provide: ExercisesRepository,
      useClass: ExercisesPrisma,
    },
    RoutinesExercisesService,
    {
      provide: RoutinesExercisesRepository,
      useClass: RoutinesExercisesPrisma,
    },
    RoutinesService,
    {
      provide: RoutinesRepository,
      useClass: RoutinesPrisma,
    },
  ],
})
export class RoutinesModule {}
