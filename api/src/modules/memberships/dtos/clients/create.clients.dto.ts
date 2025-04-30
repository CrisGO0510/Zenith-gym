import { ApiProperty } from "@nestjs/swagger"

export class CreateClientsDto {
  @ApiProperty()
  id_user_role: number
  @ApiProperty()
  id_membership: number
  @ApiProperty()
  start_date: Date
  @ApiProperty()
  end_date: Date
}