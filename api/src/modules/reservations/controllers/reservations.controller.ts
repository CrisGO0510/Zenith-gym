import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ReservationsService } from '../services/reservations.service';
import { Prisma, TB_reservations } from 'generated/prisma';
import { CreateReservationDto } from '../dto/create-reservation.dto';
import { UpdateReservationDto } from '../dto/update-reservation.dto';
import { GetReservationsDto } from '../dto/get-reservations.dto';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Get('')
  get(@Query() query: GetReservationsDto): Promise<TB_reservations[]> {
    return this.reservationsService.get(query);
  }

  @Get('pending')
  getPending(@Query() query: GetReservationsDto): Promise<TB_reservations[]> {
    return this.reservationsService.getPending(query);
  }

  @Post('')
  create(@Body() body: CreateReservationDto): Promise<TB_reservations> {
    return this.reservationsService.create(body);
  }

  @Patch(':id')
  public update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateReservationDto,
  ) {
    return this.reservationsService.update({ id }, body);
  }
}
