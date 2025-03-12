import { Controller, Get, UseGuards } from '@nestjs/common';
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
}
