import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from '../dto/AuthDto';
import { UsuarioService } from './UsuarioService';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { EmailNotFoundException } from '../Exceptions/EmailNotFoundException';

export interface UsuarioPayload {
  sub: number;
  nomeUsuario: string;
}

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}
  private readonly logger = new Logger(AuthService.name);

  async login(usuarioDto: AuthDto) {
    this.logger.log('Tentando logar');
    const usuario = await this.usuarioService.buscarEmail(usuarioDto.email);
    if (!usuario) {
      throw new EmailNotFoundException(usuarioDto.email);
    }
    const senhaInserida = usuarioDto.senha;

    const senhaCorreta = usuario.senha;

    const usuarioAutenticado = await bcrypt.compare(
      senhaInserida,
      senhaCorreta,
    );
    if (!usuarioAutenticado) {
      throw new UnauthorizedException('O email ou a senha estão incorretos');
    }

    const payload: UsuarioPayload = {
      sub: usuario.id_usuario,
      nomeUsuario: usuario.nome,
    };
    this.logger.log('Usuario logado com sucesso');
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
