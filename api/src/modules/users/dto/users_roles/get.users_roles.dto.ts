import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class GetUsersRolesDto {
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  id_user: number;
  // @IsOptional()
  // @ApiProperty({
  //   required: false,
  // })
  // id_role: number;
}
