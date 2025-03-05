import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UsuarioPayload } from '../service/AuthService';

export interface UsuarioRequest extends Request {
  usuario: UsuarioPayload;
}

@Injectable()
export class AutenticacaoGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<UsuarioRequest>();
    const token = this.extractToken(request);

    if (!token) {
      throw new UnauthorizedException('Erro de autenticação');
    }

    try {
      const payload: UsuarioPayload = this.jwtService.verify(token);
      request.usuario = payload;
    } catch (error) {
      console.error(error);
      throw new UnauthorizedException('JWT invalido');
    }
    return true;
  }

  private extractToken(request: Request): string | undefined {
    const [tipo, token] = request.headers.authorization?.split(' ') ?? [];
    return tipo === 'Bearer' ? token : undefined;
  }
}
