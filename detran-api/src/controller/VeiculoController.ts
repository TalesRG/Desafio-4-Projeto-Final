import { Body, Controller, Delete, Post, UseGuards } from '@nestjs/common';
import { VeiculoDto } from '../dto/VeiculoDto';
import { VeiculoService } from '../service/VeiculoService';
import { AutenticacaoGuard } from '../guards/AutenticacaoGuard';

@UseGuards(AutenticacaoGuard)
@Controller('veiculo')
export class VeiculoController {
  constructor(private veiculoService: VeiculoService) {}

  @Post()
  async createVeiculo(@Body() veiculoDto: VeiculoDto): Promise<any> {
    return this.veiculoService.create(veiculoDto);
  }

  @Post('all')
  async listarTodosVeiculos(): Promise<any> {
    return this.veiculoService.findAll();
  }

  @Delete('delete/:placa')
  async deleteVeiculo(@Body('placa') placa: string): Promise<any> {
    return this.veiculoService.delete(placa);
  }
}
