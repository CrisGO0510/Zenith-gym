import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repository';
import { GetUsersType } from '../types/users/get.users.type';
import { CreateUsersType } from '../types/users/create.users.type';
import { UpdateUsersDto } from '../dto/users/update.users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly users: UsersRepository) {}

  public get(where: GetUsersType) {
    return this.users.get(where);
  }

  public create(data: CreateUsersType) {
    return this.users.create(data);
  }

  public update(where: { id_user: number }, data: UpdateUsersDto) {
    return this.users.update(where, data);
  }

  public delete(where: { id_user: number }) {
    return this.users.delete(where);
  }
}
