import { ApiProperty } from '@nestjs/swagger';

export class CreateRolesDto {
  @ApiProperty()
  id_role: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
}
