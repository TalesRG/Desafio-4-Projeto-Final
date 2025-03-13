import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
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

  @Get('/all')
  async listarTodosProprietarios(): Promise<any> {
    return this.proprietarioService.findAll();
  }

  @Delete('/delete/:cpf')
  async deleteProprietario(@Param('cpf') cpf: string): Promise<any> {
    return this.proprietarioService.delete(cpf);
  }

  @Get('/find/:cpf')
  async findProprietario(@Param('cpf') cpf: string): Promise<any> {
    return this.proprietarioService.findOne(cpf);
  }
}
