import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class GetUsersDto {
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  id_user: number;
}
