import { IsEmail, IsString } from 'class-validator';

export class AuthDto {
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  senha: string;
}
