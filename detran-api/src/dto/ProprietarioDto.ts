import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class ProprietarioDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  cpf: string;

  @IsString()
  nome: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  endereco: string;

  @IsString()
  bairro: string;

  @IsString()
  cidade: string;

  @IsString()
  telefone: string;

  @IsString()
  estado: string;

  @IsString()
  sexo: string;

  @IsString()
  data_nascimento: Date;

  @IsNumber()
  pontos_na_carteira: number;
}

export default ProprietarioDto;
