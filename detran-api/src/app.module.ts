import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProprietarioModule } from './module/ProprietarioModule';
import { VeiculoModule } from './module/VeiculoModule';
import { AuthModule } from './module/AuthModule';
import { UsuarioModule } from './module/UsuarioModule';

@Module({
  imports: [
    AuthModule,
    UsuarioModule,
    ProprietarioModule,
    VeiculoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // ADICIONAR AO .ENV FUTURAMENTE
      port: 3306, // ADICIONAR AO .ENV FUTURAMENTE
      username: 'root', // ADICIONAR AO .ENV FUTURAMENTE
      password: 'root', // ADICIONAR AO .ENV FUTURAMENTE
      database: 'detran', // ADICIONAR AO .ENV FUTURAMENTE
      entities: [__dirname + '/entity/**/*{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
