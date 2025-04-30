import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from 'generated/prisma';

export class CreateMembershipsDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  paymentFrequency: $Enums.frequency;
}
