import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ProprietarioService } from '../service/ProprietarioService';
import ProprietarioDto from '../dto/ProprietarioDto';
import { AutenticacaoGuard } from '../guards/AutenticacaoGuard';

@UseGuards(AutenticacaoGuard)
@Controller('proprietario')
export class ProprietarioController {
  constructor(private proprietarioService: ProprietarioService) {}

  @Post()
  async createProprietario(
    @Body() proprietarioDto: ProprietarioDto,
  ): Promise<any> {
    return this.proprietarioService.create(proprietarioDto);
  }
}
