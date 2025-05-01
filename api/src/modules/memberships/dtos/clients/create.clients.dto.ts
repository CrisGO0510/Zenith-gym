import { ApiProperty } from '@nestjs/swagger';

export class CreateClientsDto {
  @ApiProperty({ example: 1092455532 })
  id_user: number;

  @ApiProperty({ example: 2 })
  id_membership: number;

  @ApiProperty({ example: '2025-05-01T00:00:00.000Z' })
  start_date: Date;

  @ApiProperty({ example: '2025-06-01T00:00:00.000Z' })
  end_date: Date;
}