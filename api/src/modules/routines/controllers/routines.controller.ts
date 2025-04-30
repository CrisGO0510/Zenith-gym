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
import { RoutinesService } from '../services/routines.service';

@Controller('routines')
export class RoutinesController {
  constructor(private readonly routines: RoutinesService) {}

  @Get('')
  public get(@Query() query: any) {
    return this.routines.get(query);
  }

  @Post('')
  public create(@Body() body: any) {
    return this.routines;
  }

  @Patch(':id')
  public update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: any,
  ) {
    return this.routines.update({ id: id }, body);
  }

  @Delete(':id')
  public delete(@Param('id', ParseIntPipe) id: number) {
    return this.routines.delete({ id: id });
  }
}
