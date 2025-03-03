import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProprietarioEntity } from '../entity/ProprietarioEntity';
import { Repository } from 'typeorm';

@Injectable()
export class ProprietarioService {
  constructor(
    @InjectRepository(ProprietarioEntity)
    private readonly proprietarioRepository: Repository<ProprietarioEntity>,
  ) {}

  async create(proprietario: ProprietarioEntity): Promise<ProprietarioEntity> {
    try {
      return this.proprietarioRepository.save(proprietario);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(): Promise<ProprietarioEntity> {
    try {
      return await this.proprietarioRepository.findOneById(1);
    } catch (error) {
      throw new Error(error);
    }
  }
}
