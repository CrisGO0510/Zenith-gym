import { IsOptional } from 'class-validator';

export class GetUsersRolesDto {
  @IsOptional()
  id_user: number;
  @IsOptional()
  id_role: number;
}
