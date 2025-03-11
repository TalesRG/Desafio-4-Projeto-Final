import { Injectable } from '@nestjs/common';
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

  async create(veiculoDto: VeiculoDto): Promise<VeiculoEntity> {
    console.log('Iniciando criação de veículo');
    const novoVeiculo = new VeiculoEntity();
    novoVeiculo.placa = veiculoDto.placa;
    novoVeiculo.modelo = veiculoDto.modelo;
    novoVeiculo.ano = veiculoDto.ano;
    novoVeiculo.cor = veiculoDto.cor;
    novoVeiculo.categoria = veiculoDto.categoria;
    novoVeiculo.chassi = veiculoDto.chassi;
    novoVeiculo.cpf_proprietario = veiculoDto.cpf_proprietario;

    return await this.veiculoRepository.save(novoVeiculo);
  }

  async findAll(): Promise<VeiculoEntity[]> {
    return await this.veiculoRepository.find();
  }
}
