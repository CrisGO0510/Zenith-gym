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

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Get('')
  get(
    @Query() query: Prisma.TB_reservationsWhereInput,
  ): Promise<TB_reservations[]> {
    return this.reservationsService.get(query);
  }

  @Post('')
  create(
    @Body() body: CreateReservationDto,
  ): Promise<TB_reservations> {
    return this.reservationsService.create(body);
  }

  @Patch(':id')
  public update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateReservationDto) {
    return this.reservationsService.update({ id }, body);
  }
}
