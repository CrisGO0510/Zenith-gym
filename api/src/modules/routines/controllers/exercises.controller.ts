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
import { ExercisesService } from '../services/exercises.service';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercises: ExercisesService) {}

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
