import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateEmployeesDto {
  @ApiProperty({ example: 1092455532, description: 'ID del usuario' })
  @IsNumber()
  userId: number;

  @ApiProperty({
    example: 'Lorem ipsum',
    description: 'Biografía del empleado',
  })
  @IsString()
  biography: string;

  @ApiProperty({
    example: 'Nutrición deportiva',
    description: 'Especialidad del empleado',
  })
  @IsString()
  specialty: string;

  @ApiProperty({
    example: '2001-01-01T05:00:00.000Z',
    description: 'Fecha de ingreso (ISO)',
  })
  @IsDateString()
  date_entry: string;

  @ApiProperty({ example: 3, description: 'ID del rol que tendrá el usuario' })
  @IsNumber()
  employeeTypeId: number;
}