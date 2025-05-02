import { ReservationsService } from './services/reservations.service';
import { ReservationsController } from './controllers/reservations.controller';
import { ReservationsRepository } from './repositories/reservations.repository';
import { ReservationsPrisma } from './repositories/implementations/reservations.prisma';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ReservationsController],
  providers: [
    ReservationsService,
    {
      provide: ReservationsRepository,
      useClass: ReservationsPrisma,
    },
  ],
})
export class ReservationsModule {}
