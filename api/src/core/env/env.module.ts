import { Module } from '@nestjs/common';
import { EnvService } from './service/env.service';

@Module({
  providers: [EnvService],
  exports: [EnvService],
})
export class EnvModule {}
