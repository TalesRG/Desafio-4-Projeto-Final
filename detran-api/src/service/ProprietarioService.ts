import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProprietarioEntity } from '../entity/ProprietarioEntity';
import { Repository } from 'typeorm';
import ProprietarioDto from '../dto/ProprietarioDto';

@Injectable()
export class ProprietarioService {
  constructor(
    @InjectRepository(ProprietarioEntity)
    private readonly proprietarioRepository: Repository<ProprietarioEntity>,
  ) {}

  async create(proprietario: ProprietarioDto): Promise<ProprietarioEntity> {
    if (await this.verificarCpf(proprietario.cpf)) {
      throw new Error('CPF já cadastrado');
    }

    if (await this.verificarEmail(proprietario.cpf)) {
      throw new Error('Email já cadastrado');
    }

    const novoProprietario = new ProprietarioEntity();
    novoProprietario.cpf = proprietario.cpf;
    novoProprietario.nome = proprietario.nome;
    novoProprietario.email = proprietario.email;
    novoProprietario.endereco = proprietario.endereco;
    novoProprietario.bairro = proprietario.bairro;
    novoProprietario.cidade = proprietario.cidade;
    novoProprietario.telefone = proprietario.telefone;
    novoProprietario.estado = proprietario.estado;
    novoProprietario.sexo = proprietario.sexo;
    novoProprietario.data_nascimento = proprietario.data_nascimento;

    try {
      return await this.proprietarioRepository.save(novoProprietario);
    } catch (error) {
      throw new Error(error);
    }
  }

  async verificarCpf(cpf: string) {
    const cpfExistente = await this.proprietarioRepository.findOne({
      where: { cpf },
    });

    if (cpfExistente) {
      return true;
    }
    return false;
  }

  async verificarEmail(email: string) {
    const emailExistente = await this.proprietarioRepository.findOne({
      where: { email },
    });

    if (emailExistente) {
      return true;
    }
    return false;
  }
}
