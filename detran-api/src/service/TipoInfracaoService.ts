import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoInfracaoEntity } from '../entity/TipoInfracao';

@Injectable()
export class TipoInfracaoService {
  constructor(
    @InjectRepository(TipoInfracaoEntity)
    private readonly tipoInfracaoRepository: Repository<TipoInfracaoEntity>,
  ) {}

  async tipoInfracao(): Promise<TipoInfracaoEntity[]> {
    return await this.tipoInfracaoRepository.find();
  }

  async tipoInfracaoPorId(id: number): Promise<TipoInfracaoEntity> {
    return await this.tipoInfracaoRepository.findOne({
      where: { id_tipo_infracao: id },
    });
  }
}
