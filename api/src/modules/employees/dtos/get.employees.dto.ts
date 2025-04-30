import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class GetEmployeesDto {
  @IsOptional()
  @ApiProperty({
    required: false
  })
  id_user_role: number
}