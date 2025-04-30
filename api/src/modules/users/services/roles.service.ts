import { Injectable } from '@nestjs/common';
import { RolesRepository } from '../repositories/roles.repository';
import { GetRolesType } from '../types/roles/get.roles.type';
import { CreateRolesType } from '../types/roles/create.roles.type';
import { UpdateRolesType } from '../types/roles/update.roles.type';

@Injectable()
export class RolesService {
  constructor(private readonly roles: RolesRepository) {}

  public get(where: GetRolesType) {
    return this.roles.get(where);
  }

  public create(data: CreateRolesType) {
    return this.roles.create(data);
  }

  public update(where: { id_role: number }, data: UpdateRolesType) {
    return this.roles.update(where, data);
  }

  public delete(where: { id_role: number }) {
    return this.roles.delete(where);
  }
}
