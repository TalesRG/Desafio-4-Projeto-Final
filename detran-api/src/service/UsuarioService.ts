import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from '../entity/UsuarioEntity';
import { Repository } from 'typeorm';
import { UsuarioDto } from '../dto/UsuarioDto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}
  async create(usuarioDto: UsuarioDto): Promise<UsuarioEntity> {
    if (await this.verificarEmail(usuarioDto.email)) {
      throw new Error('Email já cadastrado');
    }
    const novoUsuario = new UsuarioEntity();
    novoUsuario.nome = usuarioDto.nome;
    novoUsuario.email = usuarioDto.email;
    novoUsuario.senha = this.criptografarSenha(usuarioDto.senha);

    return await this.usuarioRepository.save(novoUsuario);
  }

  criptografarSenha(senha: string): string {
    const salt = 10;
    const hashedPassword = bcrypt.hashSync(senha, salt);
    return hashedPassword;
  }

  async verificarEmail(email: string) {
    const emailExistente = await this.usuarioRepository.findOne({
      where: { email },
    });

    if (emailExistente) {
      return true;
    }
    return false;
  }

  async buscarEmail(email: string): Promise<UsuarioEntity> {
    return await this.usuarioRepository.findOne({ where: { email } });
  }
}
