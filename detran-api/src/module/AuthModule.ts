import { Module } from '@nestjs/common';
import { AuthController } from '../controller/AuthController';
import { AuthService } from '../service/AuthService';
import { UsuarioModule } from './UsuarioModule';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsuarioModule,
    JwtModule.register({
      global: true,
      secret: 'secretKey',
      signOptions: {
        expiresIn: '72h',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
