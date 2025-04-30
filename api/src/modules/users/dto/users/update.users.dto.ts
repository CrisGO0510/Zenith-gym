import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateUsersDto {
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  id_user?: number;
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  name?: string;
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  lastname?: string;
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  email?: string;
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  password?: string;
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  phone_number?: string;
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  birthday?: Date;
}
