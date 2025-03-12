import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AutenticacaoGuard } from '../guards/AutenticacaoGuard';
import { InfracaoService } from '../service/InfracaoService';
import InfracaoDto from '../dto/InfracaoDto';
import { TipoInfracaoService } from '../service/TipoInfracaoService';

@UseGuards(AutenticacaoGuard)
@Controller('infracao')
export class InfracaoController {
  constructor(
    private infracaoService: InfracaoService,
    private tipoInfracao: TipoInfracaoService,
  ) {}

  @Post('/cadastrar')
  async createInfracao(@Body() infracaoDto: InfracaoDto): Promise<any> {
    return this.infracaoService.create(infracaoDto);
  }

  @Get('/listar')
  async listarTodasInfracoes(): Promise<any> {
    return this.infracaoService.findAll();
  }

  @Get('/buscar/:placa')
  async buscarInfracoesPorPlaca(@Param('placa') placa: string): Promise<any> {
    return this.infracaoService.findByPlaca(placa);
  }

  @Get('/listar/tipoInfracao')
  async listarTipoInfracoes(): Promise<any> {
    return this.tipoInfracao.tipoInfracao();
  }

  @Get('/listar/tipoInfracao/:id')
  async listarTipoInfracaoPorId(@Param('id') id: number): Promise<any> {
    return this.tipoInfracao.tipoInfracaoPorId(id);
  }

  @Delete('/deletar/:id')
  async deletarInfracao(@Param('id') id: number): Promise<any> {
    return this.infracaoService.delete(id);
  }
}
