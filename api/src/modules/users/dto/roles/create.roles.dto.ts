import { ApiProperty } from '@nestjs/swagger';

export class CreateRolesDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
}
