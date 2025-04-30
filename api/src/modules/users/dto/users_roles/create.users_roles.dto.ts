import { ApiProperty } from '@nestjs/swagger';

export class CreateUsersRolesDto {
  @ApiProperty()
  id_user_role: number;
  @ApiProperty()
  id_user: number;
  @ApiProperty()
  id_role: number;
}
