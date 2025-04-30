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
import { RestrictionsService } from '../services/restrictions.service';

@Controller('restrictions')
export class RestrictionsController {
  constructor(private readonly employees: RestrictionsService) {}

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
    return this.employees.update({ id_restriction: id }, body);
  }

  @Delete(':id')
  public delete(@Param('id', ParseIntPipe) id: number) {
    return this.employees.delete({ id_restriction: id });
  }
}
