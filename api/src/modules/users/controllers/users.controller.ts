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
import { UsersService } from '../services/users.service';
import { GetUsersDto } from '../dto/users/get.users.dto';
import { CreateUsersDto } from '../dto/users/create.users.dto';
import { UpdateUsersDto } from '../dto/users/update.users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @Get('')
  public get(@Query() query: GetUsersDto) {
    return this.users.get(query);
  }

  @Post('')
  public create(@Body() body: CreateUsersDto) {
    return this.users.create(body);
  }

  @Patch(':id')
  public update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUsersDto,
  ) {
    return this.users.update({ id_user: id }, body);
  }

  @Delete(':id')
  public delete(@Param('id', ParseIntPipe) id: number) {
    return this.users.delete({ id_user: id });
  }
}
