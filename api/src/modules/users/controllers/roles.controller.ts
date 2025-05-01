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
import { RolesService } from '../services/roles.service';
import { GetRolesDto } from '../dto/roles/get.roles.dto';
import { CreateRolesDto } from '../dto/roles/create.roles.dto';
import { UpdateRolesDto } from '../dto/roles/update.roles.dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly roles: RolesService) {}

  @Get('')
  public get(@Query() query: GetRolesDto) {
    if (query.id_role) {
      query.id_role = Number(query.id_role);
    }

    return this.roles.get(query);
  }

  @Post('')
  public create(@Body() body: CreateRolesDto) {
    return this.roles.create(body);
  }

  @Patch(':id')
  public update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateRolesDto,
  ) {
    return this.roles.update({ id_role: id }, body);
  }

  @Delete(':id')
  public delete(@Param('id', ParseIntPipe) id: number) {
    return this.roles.delete({ id_role: id });
  }
}
