import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class GetClientsDto {
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  id_user_role: number;
}
