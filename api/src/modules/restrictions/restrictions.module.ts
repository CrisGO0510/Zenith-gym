import { Module } from '@nestjs/common';
import { RestrictionsController } from './controllers/restrictions.controller';
import { RestrictionsService } from './services/restrictions.service';
import { RestrictionsRepository } from './repositories/restrictions.repository';
import { RestrictionsPrisma } from './repositories/implementations/restrictions.prisma';

@Module({
  controllers: [RestrictionsController],
  providers: [
    RestrictionsService,
    {
      provide: RestrictionsRepository,
      useClass: RestrictionsPrisma,
    },
  ],
})
export class RestrictionsModule {}
