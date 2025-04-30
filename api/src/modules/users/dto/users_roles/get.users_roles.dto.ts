import { IsOptional } from 'class-validator';

export class GetUsersRolesDto {
  @IsOptional()
  id_user: number;
  @IsOptional()
  id_role: number;
  @IsOptional()
  email: string;
  @IsOptional()
  password: string;
}
