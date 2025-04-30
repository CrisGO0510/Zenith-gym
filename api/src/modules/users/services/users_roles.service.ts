import { Injectable } from '@nestjs/common';
import { UsersRolesRepository } from '../repositories/users_roles.repository';
import { GetUsersRolesType } from '../types/users_roles/get.users_roles.type';
import { CreateUsersRolesType } from '../types/users_roles/create.users_roles.type';
import { UpdateUsersRolesType } from '../types/users_roles/update.users_roles.type';

@Injectable()
export class UsersRolesService {
  constructor(private readonly users_roles: UsersRolesRepository) {}

  public get(where: GetUsersRolesType) {
    return this.users_roles.get(where);
  }

  public create(data: CreateUsersRolesType) {
    return this.users_roles.create(data);
  }

  public update(where: { id_user_role: number }, data: UpdateUsersRolesType) {
    return this.users_roles.update(where, data);
  }

  public delete(where: { id_user_role: number }) {
    return this.users_roles.delete(where);
  }
}
