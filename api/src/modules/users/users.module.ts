import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { RolesController } from './controllers/roles.controller';
import { UsersService } from './services/users.service';
import { UsersRepository } from './repositories/users.repository';
import { UsersPrisma } from './repositories/implementations/users.prisma';
import { RolesService } from './services/roles.service';
import { RolesPrisma } from './repositories/implementations/roles.prisma';
import { RolesRepository } from './repositories/roles.repository';
import { UsersRolesController } from './controllers/users_roles.controller';
import { UsersRolesService } from './services/users_roles.service';
import { UsersRolesRepository } from './repositories/users_roles.repository';
import { UsersRolesPrisma } from './repositories/implementations/users_roles.prisma';

@Module({
  controllers: [UsersController, RolesController, UsersRolesController],
  providers: [
    UsersService,
    {
      provide: UsersRepository,
      useClass: UsersPrisma,
    },
    RolesService,
    {
      provide: RolesRepository,
      useClass: RolesPrisma,
    },
    UsersRolesService,
    {
      provide: UsersRolesRepository,
      useClass: UsersRolesPrisma,
    },
  ],
  exports: [
    UsersRolesService,
    {
      provide: UsersRolesRepository,
      useClass: UsersRolesPrisma,
    },
  ],
})
export class UsersModule {}
