import { IsOptional } from 'class-validator';

export class GetRolesDto {
  @IsOptional()
  id_role: number;
}
