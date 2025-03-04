import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from '../dto/AuthDto';
import { UsuarioService } from './UsuarioService';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usuarioService: UsuarioService) {}

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

    console.log('Usuário autenticado');
  }
}
