import { Module } from '@nestjs/common';
import { ModulesModule } from './modules/modules.module';
import { PrismaModule } from './core/prisma/prisma.module';

@Module({
  imports: [PrismaModule, ModulesModule],
})
export class AppModule {}
