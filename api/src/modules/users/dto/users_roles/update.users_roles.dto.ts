import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateUsersRolesDto {
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  id_user_role: number;
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  id_user: number;
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  id_role: number;
}
