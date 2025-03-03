import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProprietarioService } from '../service/proprietario.service';
import ProprietarioDto from '../dto/ProprietarioDto';
import { ProprietarioEntity } from '../entity/ProprietarioEntity';

@Controller('proprietario')
export class ProprietarioController {
  constructor(private proprietarioService: ProprietarioService) {}

  @Post()
  async createProprietario(
    @Body() proprietarioDto: ProprietarioEntity,
  ): Promise<any> {
    return this.proprietarioService.create(proprietarioDto);
  }

  @Get()
  async getProprietarios(): Promise<any> {
    return this.proprietarioService.findOne();
  }
}
