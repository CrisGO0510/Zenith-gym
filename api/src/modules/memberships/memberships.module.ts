import { Module } from '@nestjs/common';
import { MembershipsController } from './controllers/memberships.controller';
import { ClientsController } from './controllers/clients.controller';
import { MembershipsService } from './services/memberships.service';
import { MembershipsRepository } from './repositories/memberships.repository';
import { MembershipsPrisma } from './repositories/implementations/memberships.prisma';
import { ClientsService } from './services/clients.service';
import { ClientsRepository } from './repositories/clients.repository';
import { ClientsPrisma } from './repositories/implementations/clients.prisma';

@Module({
  controllers: [MembershipsController, ClientsController],
  providers: [
    MembershipsService,
    {
      provide: MembershipsRepository,
      useClass: MembershipsPrisma,
    },
    ClientsService,
    { provide: ClientsRepository, useClass: ClientsPrisma },
  ],
})
export class MembershipsModule {}
