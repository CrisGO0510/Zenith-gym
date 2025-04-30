import { ApiProperty } from "@nestjs/swagger"

export class CreateEmployeesDto {
  @ApiProperty()
  id_user_role: number
  @ApiProperty()
  bio: string
  @ApiProperty()
  specialization: string
  @ApiProperty()
  date_entry: Date
}