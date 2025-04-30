import { ApiProperty } from '@nestjs/swagger';

export class CreateRestrictionDto {
  @ApiProperty({
    example: 15,
    description: 'ID de la relación usuario-rol que se desea restringir',
  })
  id_user_role: number;

  @ApiProperty({
    example: 'Incumplimiento de normas del gimnasio',
    description: 'Motivo o descripción de la restricción impuesta',
  })
  description: string;
}
