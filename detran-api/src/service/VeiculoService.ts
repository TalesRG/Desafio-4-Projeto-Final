import { Injectable, Logger } from '@nestjs/common';
import { VeiculoDto } from '../dto/VeiculoDto';
import { InjectRepository } from '@nestjs/typeorm';
import { VeiculoEntity } from '../entity/VeiculoEntity';
import { Repository } from 'typeorm';

@Injectable()
export class VeiculoService {
  constructor(
    @InjectRepository(VeiculoEntity)
    private veiculoRepository: Repository<VeiculoEntity>,
  ) {}
  private readonly logger = new Logger(VeiculoService.name);
  async create(veiculoDto: VeiculoDto): Promise<VeiculoEntity> {
    this.logger.log('Iniciando verificação de placa');
    if (await this.verificarPlaca(veiculoDto.placa)) {
      this.logger.log('Erro ao criar veículo');
      throw new Error('Veiculo já cadastrada');
    }
    this.logger.log('Iniciando criação de veículo');
    const novoVeiculo = new VeiculoEntity();
    novoVeiculo.placa = veiculoDto.placa;
    novoVeiculo.modelo = veiculoDto.modelo;
    novoVeiculo.ano = veiculoDto.ano;
    novoVeiculo.cor = veiculoDto.cor;
    novoVeiculo.categoria = veiculoDto.categoria;
    novoVeiculo.chassi = veiculoDto.chassi;
    novoVeiculo.cpf_proprietario = veiculoDto.cpf_proprietario;

    this.logger.log('Veículo criado com sucesso');
    return await this.veiculoRepository.save(novoVeiculo);
  }

  async findAll(): Promise<VeiculoEntity[]> {
    return await this.veiculoRepository.find();
  }

  private async verificarPlaca(placa: string) {
    const placaExistente = await this.veiculoRepository.findOne({
      where: { placa },
    });

    if (placaExistente) {
      return true;
    }
    return false;
  }
}
