import { Body, Controller, Post } from '@nestjs/common';
import { VeiculoDto } from '../dto/VeiculoDto';
import { VeiculoService } from '../service/VeiculoService';

@Controller('veiculo')
export class VeiculoController {
  constructor(private veiculoService: VeiculoService) {}

  @Post()
  async createVeiculo(@Body() veiculoDto: VeiculoDto): Promise<any> {
    return this.veiculoService.create(veiculoDto);
  }
}
