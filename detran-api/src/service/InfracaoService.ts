import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InfracaoEntity } from '../entity/InfracaoEntity';
import InfracaoDto from '../dto/InfracaoDto';

@Injectable()
export class InfracaoService {
  constructor(
    @InjectRepository(InfracaoEntity)
    private readonly infracaoRepository: Repository<InfracaoEntity>,
  ) {}

  async create(infracaoDto: InfracaoDto) {
    const novaInfracao = new InfracaoEntity();
    novaInfracao.data = infracaoDto.data;
    novaInfracao.hora = infracaoDto.hora;
    novaInfracao.placa_veiculo = infracaoDto.placa_veiculo;
    novaInfracao.id_local = infracaoDto.id_local;
    novaInfracao.matricula_agente = infracaoDto.matricula_agente;
    novaInfracao.id_tipo_infracao = infracaoDto.id_tipo_infracao;

    try {
      return await this.infracaoRepository.save(novaInfracao);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(): Promise<any> {
    return [];
  }
}
