import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersRolesService } from 'src/modules/users/services/users_roles.service';
import { GetUsersRolesType } from 'src/modules/users/types/users_roles/get.users_roles.type';

@Injectable()
export class AuthService {
  constructor(private readonly usersRole: UsersRolesService) {}

  async login(where: Omit<GetUsersRolesType | 'id_user', 'id_role'>) {
    const user = this.usersRole.get({ email: where['email'] })[0];

    if (!user) {
      throw new NotFoundException();
    }

    if (user.password !== where['password']) {
      throw new ForbiddenException();
    }

    return user;
  }
}
