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
import { SessionCapacityService } from '../services/session_capacity.service';

@Controller('session-capacity')
export class SessionCapacityController {
  constructor(private readonly employees: SessionCapacityService) {}

  @Get('')
  public get(@Query() query: any) {
    return this.employees.get(query);
  }

  @Post('')
  public create(@Body() body: any) {
    return this.employees.create(body);
  }

  @Patch(':id')
  public update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: any,
  ) {
    return this.employees.update({ id: id }, body);
  }

  @Delete(':id')
  public delete(@Param('id', ParseIntPipe) id: number) {
    return this.employees.delete({ id: id });
  }
}
