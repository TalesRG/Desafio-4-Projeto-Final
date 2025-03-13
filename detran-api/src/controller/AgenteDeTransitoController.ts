import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AutenticacaoGuard } from '../guards/AutenticacaoGuard';
import { AgenteDeTransitoService } from '../service/AgenteDeTransitoService';

@UseGuards(AutenticacaoGuard)
@Controller('agente-de-transito')
export class AgenteDeTransitoController {
  constructor(
    private readonly agenteDeTransitoService: AgenteDeTransitoService,
  ) {}

  @Get('/all')
  async listarTodosAgentesDeTransito(): Promise<any> {
    return this.agenteDeTransitoService.listarAgentes();
  }

  @Get('/buscar/:matricula')
  async buscarAgenteDeTransito(@Param('matricula') matricula: string) {
    return this.agenteDeTransitoService.buscarAgente(matricula);
  }
}
