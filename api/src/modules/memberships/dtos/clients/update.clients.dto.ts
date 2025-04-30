import { ApiProperty } from "@nestjs/swagger"
import { IsOptional } from "class-validator"

export class UpdateClientsDto {
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  id_user_role: number
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  id_membership: number
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  start_date: Date
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  end_date: Date
}