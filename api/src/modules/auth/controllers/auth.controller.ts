import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { GetUsersRolesDto } from 'src/modules/users/dto/users_roles/get.users_roles.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('login')
  login(@Body() body: Omit<GetUsersRolesDto | 'id_user', 'id_role'>) {
    return this.auth.login(body);
  }
}
