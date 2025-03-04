import { IsNotEmpty, IsString } from 'class-validator';
import { IsNull } from 'typeorm';

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

  @IsNotEmpty()
  id_infracao: number;
}
