import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioService } from '../service/UsuarioService';
import { UsuarioDto } from '../dto/UsuarioDto';

@Controller('usuario')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post('cadastrar')
  async createUsuario(@Body() usuarioDto: UsuarioDto): Promise<any> {
    return this.usuarioService.create(usuarioDto);
  }
}
