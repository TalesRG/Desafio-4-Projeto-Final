import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from '../dto/AuthDto';
import { UsuarioService } from './UsuarioService';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

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

  async login(usuarioDto: AuthDto) {
    const usuario = await this.usuarioService.buscarEmail(usuarioDto.email);
    if (!usuario) {
      throw new Error('Email não cadastrado');
    }
    const senhaInserida = usuarioDto.senha;

    const senhaCorreta = usuario.senha;

    const usuarioAutenticado = bcrypt.compare(senhaInserida, senhaCorreta);
    if (!usuarioAutenticado) {
      throw new UnauthorizedException('O email ou a senha estão incorretos');
    }

    const payload: UsuarioPayload = {
      sub: usuario.id_usuario,
      nomeUsuario: usuario.nome,
    };
    console.log('Usuario logado com sucesso');
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
