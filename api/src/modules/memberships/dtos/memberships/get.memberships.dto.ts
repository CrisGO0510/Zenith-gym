import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class GetMembershipsDto {
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  name: string;
}
