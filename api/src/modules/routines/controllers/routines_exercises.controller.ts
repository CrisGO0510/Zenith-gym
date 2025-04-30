import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { RoutinesExercisesService } from '../services/routines_exercises.service';

@Controller('routines-exercises')
export class RoutinesExercisesController {
  constructor(private readonly exercises: RoutinesExercisesService) {}

  @Get('')
  public get(@Query() query: any) {
    return this.exercises.get(query);
  }

  @Post('')
  public create(@Body() body: any) {
    return this.exercises;
  }

  @Patch(':id')
  public update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: any,
  ) {
    return this.exercises.update({ id: id }, body);
  }

  @Delete(':id')
  public delete(@Param('id', ParseIntPipe) id: number) {
    return this.exercises.delete({ id: id });
  }
}
