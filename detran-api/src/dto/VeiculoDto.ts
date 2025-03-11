import { IsNotEmpty, IsString } from 'class-validator';

export class VeiculoDto {
  @IsString()
  placa: string;

  @IsString()
  chassi: string;

  @IsString()
  cor: string;

  @IsNotEmpty()
  ano: number;

  @IsString()
  modelo: string;

  @IsString()
  categoria: string;

  @IsString()
  cpf_proprietario: string;
}
