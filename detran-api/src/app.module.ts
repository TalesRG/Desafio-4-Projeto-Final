import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProprietarioModule } from './module/ProprietarioModule';
import { VeiculoModule } from './module/VeiculoModule';
import { AuthModule } from './module/AuthModule';
import { UsuarioModule } from './module/UsuarioModule';
import { ConfigModule } from '@nestjs/config';
import * as process from 'node:process';

@Module({
  imports: [
    AuthModule,
    UsuarioModule,
    ProprietarioModule,
    VeiculoModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: String(process.env.HOST_DB), // ADICIONAR AO .ENV FUTURAMENTE
      port: Number(process.env.PORT_DB), // ADICIONAR AO .ENV FUTURAMENTE
      username: String(process.env.USER), // ADICIONAR AO .ENV FUTURAMENTE
      password: String(process.env.PASSWORD), // ADICIONAR AO .ENV FUTURAMENTE
      database: 'detran', // ADICIONAR AO .ENV FUTURAMENTE
      entities: [__dirname + '/entity/**/*{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
