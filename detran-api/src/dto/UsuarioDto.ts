import { IsEmail, IsString } from 'class-validator';

export class UsuarioDto {
  @IsString()
  nome: string;
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  senha: string;
}
