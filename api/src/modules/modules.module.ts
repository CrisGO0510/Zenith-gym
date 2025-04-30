import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MembershipsModule } from './memberships/memberships.module';

@Module({
  imports: [AuthModule, UsersModule, MembershipsModule],
})
export class ModulesModule {}
