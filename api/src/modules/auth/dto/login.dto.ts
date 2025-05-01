import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    example: 1092455532,
    description: 'ID del usuario que intenta iniciar sesión',
  })
  id_user: number;

  @ApiProperty({
    example: 'cris0510',
    description: 'Contraseña en texto plano del usuario',
  })
  password: string;
}
