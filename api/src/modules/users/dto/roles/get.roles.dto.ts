import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class GetRolesDto {
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  id_role: number;
}
