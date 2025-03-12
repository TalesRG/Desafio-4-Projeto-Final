import { TypeOrmModule } from '@nestjs/typeorm';
import { InfracaoEntity } from '../entity/InfracaoEntity';
import { InfracaoController } from '../controller/InfracaoController';
import { InfracaoService } from '../service/InfracaoService';
import { Module } from '@nestjs/common';
import { TipoInfracaoService } from '../service/TipoInfracaoService';
import { TipoInfracaoEntity } from '../entity/TipoInfracao';

@Module({
  imports: [
    TypeOrmModule.forFeature([InfracaoEntity]),
    TypeOrmModule.forFeature([TipoInfracaoEntity]),
  ],
  controllers: [InfracaoController],
  providers: [InfracaoService, TipoInfracaoService],
})
export class InfracaoModule {}
