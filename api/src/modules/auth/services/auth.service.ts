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

  async login(where: Partial<GetUsersRolesType>) {

    //TODO: Quitar el any
    const user = (await this.usersRole.get({ id_user: where['id_user'] }))[0] as any;

    if (!user) {
      throw new NotFoundException();
    }
    
    if (user.TB_users.password !== where['password']) {
      throw new ForbiddenException('Invalid password');
    }
    

    return user;
  }
}
