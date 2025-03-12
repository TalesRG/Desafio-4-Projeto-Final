import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LocalEntity } from '../entity/LocalEntity';
import { Repository } from 'typeorm';

@Injectable()
export class LocalService {
  constructor(
    @InjectRepository(LocalEntity)
    private readonly localRepository: Repository<LocalEntity>,
  ) {}

  async listarLocais(): Promise<LocalEntity[]> {
    return await this.localRepository.find();
  }

  async buscarLocal(id: number) {
    return await this.localRepository.findOne({ where: { id_local: id } });
  }
}
