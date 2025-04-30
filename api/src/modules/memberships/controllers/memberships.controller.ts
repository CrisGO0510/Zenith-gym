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
import { MembershipsService } from '../services/memberships.service';
import { GetMembershipsDto } from '../dtos/memberships/get.memberships.dto';
import { CreateMembershipsDto } from '../dtos/memberships/create.memberships.dto';
import { UpdateMembershipsDto } from '../dtos/memberships/update.memberships.dto';

@Controller('memberships')
export class MembershipsController {
  constructor(private readonly memberships: MembershipsService) {}

  @Get('')
  public get(@Query() query: GetMembershipsDto) {
    return this.memberships.get(query);
  }

  @Post('')
  public create(@Body() body: CreateMembershipsDto) {
    return this.memberships;
  }

  @Patch(':id')
  public update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateMembershipsDto,
  ) {
    return this.memberships.update({ id: id }, body);
  }

  @Delete(':id')
  public delete(@Param('id', ParseIntPipe) id: number) {
    return this.memberships.delete({ id: id });
  }
}
