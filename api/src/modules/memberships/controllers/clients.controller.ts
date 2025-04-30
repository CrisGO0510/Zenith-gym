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
import { ClientsService } from '../services/clients.service';
import { GetClientsDto } from '../dtos/clients/get.clients.dto';
import { CreateClientsDto } from '../dtos/clients/create.clients.dto';
import { UpdateClientsDto } from '../dtos/clients/update.clients.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clients: ClientsService) {}

  @Get('')
  public get(@Query() query: GetClientsDto) {
    return this.clients.get(query);
  }

  @Post('')
  public create(@Body() body: CreateClientsDto) {
    return this.clients.create(body);
  }

  @Patch(':id')
  public update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateClientsDto,
  ) {
    return this.clients.update({ id: id }, body);
  }

  @Delete(':id')
  public delete(@Param('id', ParseIntPipe) id: number) {
    return this.clients.delete({ id: id });
  }
}
