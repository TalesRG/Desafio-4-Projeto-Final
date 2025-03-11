import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AutenticacaoGuard } from '../guards/AutenticacaoGuard';
import { InfracaoService } from '../service/InfracaoService';
import InfracaoDto from '../dto/InfracaoDto';

@UseGuards(AutenticacaoGuard)
@Controller('infracao')
export class InfracaoController {
  constructor(private infracaoService: InfracaoService) {}

  @Post('/cadastrar')
  async createInfracao(@Body() infracaoDto: InfracaoDto): Promise<any> {
    return this.infracaoService.create(infracaoDto);
  }
}
