import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsInt } from 'class-validator';

export class GetReservationsDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  id_client_membership?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  id_routine?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  id_user?: number;
}
