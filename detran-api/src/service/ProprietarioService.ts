import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
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
  private readonly logger = new Logger(ProprietarioService.name);
  async create(proprietario: ProprietarioDto): Promise<ProprietarioEntity> {
    this.logger.log('Iniciando criação de proprietário');
    if (await this.verificarCpf(proprietario.cpf)) {
      throw new HttpException('CPF já cadastrado', HttpStatus.BAD_REQUEST);
    }
    if (await this.verificarEmail(proprietario.cpf)) {
      throw new HttpException('Email já cadastrado', HttpStatus.BAD_REQUEST);
    }
    this.logger.log('Proprietário não encontrado');
    this.logger.log('Iniciando criação de proprietário');
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
    novoProprietario.pontos_na_carteira = proprietario.pontos_na_carteira;

    try {
      this.logger.log('Proprietário criado com sucesso');
      return await this.proprietarioRepository.save(novoProprietario);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(): Promise<ProprietarioEntity[]> {
    this.logger.log('Buscando todos os proprietários');
    return await this.proprietarioRepository.find();
  }

  async findOne(cpf: string): Promise<ProprietarioEntity> {
    this.logger.log('Buscando proprietário');
    const proprietario = await this.proprietarioRepository.findOne({
      where: { cpf },
    });

    if (!proprietario) {
      throw new HttpException(
        'Proprietário não encontrado',
        HttpStatus.BAD_REQUEST,
      );
    }
    this.logger.log('Proprietário encontrado');
    return proprietario;
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

  async delete(cpf: string) {
    this.logger.log('Iniciando exclusão de proprietário');
    const proprietario = await this.proprietarioRepository.findOne({
      where: { cpf },
    });

    if (!proprietario) {
      throw new HttpException(
        'Proprietário não encontrado',
        HttpStatus.BAD_REQUEST,
      );
    }

    this.logger.log('Proprietário encontrado');
    this.logger.log('Iniciando exclusão de proprietário');
    return await this.proprietarioRepository.remove(proprietario);
  }
}
