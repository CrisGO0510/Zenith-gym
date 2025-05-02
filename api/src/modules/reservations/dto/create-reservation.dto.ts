import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateReservationDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id_client_membership: number;

  @ApiProperty({ example: 2 })
  @IsInt()
  id_routine: number;

  @ApiProperty({ example: '2025-05-02T18:00:00.000Z' })
  @IsDateString()
  start_time: string;

  @ApiPropertyOptional({ example: 'pendiente' })
  @IsOptional()
  @IsString()
  status?: string;
}
