import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class InfracaoDto {
  @IsNotEmpty()
  data: Date;
  @IsString()
  hora: string;
  @IsString()
  placa_veiculo: string;
  @IsNumber()
  id_local: number;
  @IsString()
  matricula_agente: string;
  @IsNumber()
  id_tipo_infracao: number;
}

export default InfracaoDto;
