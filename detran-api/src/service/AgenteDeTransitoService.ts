import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AgenteEntity } from '../entity/AgenteEntity';
import { Repository } from 'typeorm';
import { ProprietarioEntity } from '../entity/ProprietarioEntity';

@Injectable()
export class AgenteDeTransitoService {
  constructor(
    @InjectRepository(AgenteEntity)
    private readonly agenteDeTransitoRepository: Repository<AgenteEntity>,
  ) {}

  async listarAgentes() {
    return await this.agenteDeTransitoRepository.find();
  }

  async buscarAgente(matricula: string) {
    return await this.agenteDeTransitoRepository.findOne({
      where: { matricula: matricula },
    });
  }
}
