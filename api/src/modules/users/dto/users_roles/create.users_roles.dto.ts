import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateUsersRolesDto {
  @ApiProperty({ example: 1092455532, description: 'ID del usuario' })
  @IsNumber()
  id_user: number;

  @ApiProperty({ example: 3, description: 'ID del rol del usuario' })
  @IsNumber()
  id_role: number;
}
