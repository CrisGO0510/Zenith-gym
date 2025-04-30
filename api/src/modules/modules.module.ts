import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MembershipsModule } from './memberships/memberships.module';
import { EmployeesModule } from './employees/employees.module';
import { NotificationsModule } from './notifications/notifications.module';
import { RestrictionsModule } from './restrictions/restrictions.module';
import { RoutinesModule } from './routines/routines.module';
import { SessionsModule } from './sessions/sessions.module';

@Module({
  imports: [AuthModule, UsersModule, MembershipsModule, EmployeesModule, NotificationsModule, RestrictionsModule, RoutinesModule, SessionsModule],
})
export class ModulesModule {}
