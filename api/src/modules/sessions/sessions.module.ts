import { Module } from '@nestjs/common';
import { ReservationsController } from './controllers/reservations.controller';
import { SessionCapacityController } from './controllers/session_capacity.controller';
import { ReservationsService } from './services/reservations.service';
import { ReservationsRepository } from './repositories/reservations.repository';
import { ReservationsPrisma } from './repositories/implementation/reservations.prisma';
import { SessionCapacityService } from './services/session_capacity.service';
import { SessionCapacityRepository } from './repositories/session_capacity.repository';
import { SessionCapacityPrisma } from './repositories/implementation/session_capacity.prisma';

@Module({
  controllers: [ReservationsController, SessionCapacityController],
  providers: [
    ReservationsService,
    {
      provide: ReservationsRepository,
      useClass: ReservationsPrisma,
    },
    SessionCapacityService,
    {
      provide: SessionCapacityRepository,
      useClass: SessionCapacityPrisma,
    },
  ],
})
export class SessionsModule {}
