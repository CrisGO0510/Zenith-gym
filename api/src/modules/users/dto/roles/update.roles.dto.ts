import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateRolesDto {
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  id_role: number;
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  name: string;
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  description: string;
}
