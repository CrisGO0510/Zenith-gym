import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from 'generated/prisma';

export class UpdateMembershipsDto {
  @ApiProperty()
  @ApiProperty({
    required: false,
  })
  id: number;
  @ApiProperty()
  @ApiProperty({
    required: false,
  })
  name: string;
  @ApiProperty()
  @ApiProperty({
    required: false,
  })
  description: string;
  @ApiProperty()
  @ApiProperty({
    required: false,
  })
  price: number;
  @ApiProperty()
  @ApiProperty({
    required: false,
  })
  paymentFrequency: $Enums.frequency;
}
