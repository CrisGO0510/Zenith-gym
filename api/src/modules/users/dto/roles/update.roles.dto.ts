import { IsOptional } from 'class-validator';

export class UpdateRolesDto {
  @IsOptional()
  id_role: number;
  @IsOptional()
  name: string;
  @IsOptional()
  description: string;
}
