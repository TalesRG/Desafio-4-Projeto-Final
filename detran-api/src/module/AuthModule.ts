import { Module } from '@nestjs/common';
import { AuthController } from '../controller/AuthController';
import { AuthService } from '../service/AuthService';
import { UsuarioModule } from './UsuarioModule';

@Module({
  imports: [UsuarioModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
