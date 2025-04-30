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
import { EmployeesService } from '../services/employees.service';
import { GetEmployeesDto } from '../dtos/get.employees.dto';
import { CreateEmployeesDto } from '../dtos/create.employees.dto';
import { UpdateEmployeesDto } from '../dtos/update.employees.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employees: EmployeesService) {}

  @Get('')
  public get(@Query() query: GetEmployeesDto) {
    return this.employees.get(query);
  }

  @Post('')
  public create(@Body() body: CreateEmployeesDto) {
    return this.employees;
  }

  @Patch(':id')
  public update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateEmployeesDto,
  ) {
    return this.employees.update({ id: id }, body);
  }

  @Delete(':id')
  public delete(@Param('id', ParseIntPipe) id: number) {
    return this.employees.delete({ id: id });
  }
}
