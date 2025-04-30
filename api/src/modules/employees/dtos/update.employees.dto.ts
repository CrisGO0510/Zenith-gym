import { ApiProperty } from "@nestjs/swagger"
import { IsOptional } from "class-validator"

export class UpdateEmployeesDto {
  @IsOptional()
  @ApiProperty({
    required: false
  })
  id_user_role: number
  @IsOptional()
  @ApiProperty({
    required: false
  })
  bio: string
  @IsOptional()
  @ApiProperty({
    required: false
  })
  specialization: string
  @IsOptional()
  @ApiProperty({
    required: false
  })
  date_entry: Date
}