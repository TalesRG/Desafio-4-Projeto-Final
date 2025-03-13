import { Injectable, Logger } from '@nestjs/common';
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

  private readonly logger = new Logger(InfracaoService.name);

  async create(infracaoDto: InfracaoDto) {
    this.logger.log('Iniciando criação de infração');
    const novaInfracao = new InfracaoEntity();
    novaInfracao.data = infracaoDto.data;
    novaInfracao.hora = infracaoDto.hora;
    novaInfracao.placa_veiculo = infracaoDto.placa_veiculo;
    novaInfracao.id_local = infracaoDto.id_local;
    novaInfracao.matricula_agente = infracaoDto.matricula_agente;
    novaInfracao.id_tipo_infracao = infracaoDto.id_tipo_infracao;

    try {
      this.logger.log('Salvando infração');
      return await this.infracaoRepository.save(novaInfracao);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(): Promise<any> {
    return await this.infracaoRepository.find();
  }

  async delete(id: number) {
    this.logger.log('Iniciando exclusão de infração');
    try {
      this.logger.log('Excluindo infração');
      return await this.infracaoRepository.delete(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findByPlaca(placa: string) {
    return await this.infracaoRepository.find({
      where: { placa_veiculo: placa },
    });
  }
}
