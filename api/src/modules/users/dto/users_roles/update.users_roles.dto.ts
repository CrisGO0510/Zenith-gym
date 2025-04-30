import { IsOptional } from 'class-validator';

export class UpdateUsersRolesDto {
  @IsOptional()
  id_user_role: number;
  @IsOptional()
  id_user: number;
  @IsOptional()
  id_role: number;
}
