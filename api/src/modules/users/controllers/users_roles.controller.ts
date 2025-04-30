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
import { UsersRolesService } from '../services/users_roles.service';
import { GetUsersRolesDto } from '../dto/users_roles/get.users_roles.dto';
import { CreateUsersRolesDto } from '../dto/users_roles/create.users_roles.dto';
import { UpdateUsersRolesDto } from '../dto/users_roles/update.users_roles.dto';

@Controller('users-roles')
export class UsersRolesController {
  constructor(private readonly usersRoles: UsersRolesService) {}

  @Get('')
  public get(@Query() query: GetUsersRolesDto) {
    return this.usersRoles.get(query);
  }

  @Post('')
  public create(@Body() body: CreateUsersRolesDto) {
    return this.usersRoles;
  }

  @Patch(':id')
  public update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUsersRolesDto,
  ) {
    return this.usersRoles.update({ id_user_role: id }, body);
  }

  @Delete(':id')
  public delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersRoles.delete({ id_user_role: id });
  }
}
