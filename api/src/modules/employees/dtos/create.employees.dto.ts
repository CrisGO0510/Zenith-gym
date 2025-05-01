import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateUsersRolesDto } from 'src/modules/users/dto/users_roles/create.users_roles.dto';

export class CreateEmployeesDto {
  @ApiProperty({
    example: 'Entrenador con experiencia en fuerza',
    description: 'Biografía del empleado',
  })
  @IsString()
  @IsNotEmpty()
  bio: string;

  @ApiProperty({
    example: 'Musculación y nutrición',
    description: 'Especialidad del empleado',
  })
  @IsString()
  @IsNotEmpty()
  specialization: string;

  @ApiProperty({
    example: '2025-01-01T00:00:00.000Z',
    description: 'Fecha de ingreso al gimnasio',
  })
  @IsDateString()
  date_entry: string;

  @ApiProperty({
    description: 'Objeto que contiene el id del usuario y el rol',
    type: CreateUsersRolesDto,
  })
  @IsObject()
  @ValidateNested()
  @Type(() => CreateUsersRolesDto)
  TB_user_role: CreateUsersRolesDto;
}
